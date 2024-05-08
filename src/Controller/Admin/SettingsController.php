<?php

declare(strict_types=1);

/**
 * instride AG.
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright 2024 instride AG (https://instride.ch)
 */

namespace App\Controller\Admin;

use Pimcore\Controller\FrontendController;
use Pimcore\Model\Asset\Folder;
use Pimcore\Model\Asset\Image;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/admin/settings')]
class SettingsController extends FrontendController
{
    /**
     * @param array<string, mixed> $websiteConfig
     */
    #[Route(path: '/display-custom-image', name: 'pimcore_settings_display_custom_image')]
    public function displayCustomImageAction(array $websiteConfig, KernelInterface $kernel): BinaryFileResponse
    {
        $images = [
            'pc11.svg',
            'pimconaut-ecommerce.svg',
            'pimconaut-engineer.svg',
            'pimconaut-moon.svg',
            'pimconaut-rocket.svg',
            'pimconaut-world.svg',
        ];
        $folder = $websiteConfig['admin_login_image_folder'] ?? null;

        if ($folder instanceof Folder) {
            $children = $folder->getChildren()->getAssets();

            if (! empty($children)) {
                $images = \array_values(\array_filter($children, static fn ($child) => $child instanceof Image));
            }
        }

        $image = $images[\array_rand($images)];

        if ($image instanceof Image) {
            try {
                $filePath = $image->getThumbnail('pimcore_admin_splash_screen')->getLocalFile();
            } catch (\Exception) {
                $filePath = \sprintf(
                    '%s/public/bundles/pimcoreadmin/img/login/%s',
                    $kernel->getProjectDir(),
                    $image
                );
            }
        } else {
            $filePath = \sprintf(
                '%s/public/bundles/pimcoreadmin/img/login/%s',
                $kernel->getProjectDir(),
                $image
            );
        }

        return $this->file($filePath, null, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
