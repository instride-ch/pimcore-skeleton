<?php
/**
 * w-vision
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright  Copyright (c) 2018 w-vision AG (https://www.w-vision.ch)
 */

namespace Deployer;

require __DIR__ . '/vendor/deployer/deployer/recipe/symfony3.php';  // Comes form deployer.phar
require __DIR__ . '/vendor/w-vision/pimcore-deployer/recipes/pimcore.php';
require __DIR__ . '/vendor/w-vision/pimcore-deployer/recipes/yarn.php';

// Hosts
host('pimcore-skeleton.pimstage.ch')
    ->user('pimcore-skeleton')
    ->port(22)
    ->set('deploy_path', '/var/www/vhosts/pimcore-skeleton.ch')
    ->identityFile('.deployer/id_deployer')
    ->stage('dev');

// Configuration
set('repository', 'git@github.com:w-vision/pimcore-skeleton.git');
set('default_stage', 'dev');
set('keep_releases', 2);
set('ssh_multiplexing', false); // Cygwin doesn't support multiplexing
//set('ssh_type', 'ext-ssh2');

// Shared files and directories
set('shared_files', [
    '.env',
    'app/config/local/database.yml',
    'app/config/parameters.yml',
    'var/config/custom-reports.php',
    'var/config/debug-mode.php',
    'var/config/GeoLite2-City.mmdb',
    'var/config/maintenance.php',
    'var/config/reports.php',
    'var/config/robots.php',
    'var/config/system.yml',
    'var/config/web2print.php',
    'var/config/website-settings.php',
]);
set('shared_dirs', [
    'var/config/portal',
    'var/email',
    'var/recyclebin',
    'var/sessions',
    'var/versions',
    'web/var',
]);

set('bin/php', static function () {
    return '/opt/plesk/php/7.4/bin/php';
});

set('current_path', static function () {
    $link = run('readlink {{deploy_path}}/httpdocs')->toString();

    return $link[0] === '/' ? $link : sprintf('%s/%s', get('deploy_path'), $link);
});

set('bin/composer', static function () {
    run('cd {{release_path}} && curl -sS https://getcomposer.org/installer | {{bin/php}}');

    return '{{bin/php}} {{release_path}}/composer.phar';
});

desc('Custom YARN tasks');
task('deploy:yarn:icons:custom', static function() {
    run('cd {{release_path}} && {{bin/yarn}} icons:custom');
});

desc('Deploy tasks');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:assets:install',
    'deploy:yarn:install',
    //'deploy:yarn:icons:custom',          // Uncomment if you need custom icons
    'deploy:yarn:encore:production',
    'deploy:clear_paths',
    'deploy:pimcore:install-classes',
    'deploy:pimcore:migrate:core',
    'deploy:pimcore:migrate',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
])->desc('Deploys your project');

// [Optional] If deploy fails, automatically unlock.
after('deploy:failed', 'deploy:unlock');
