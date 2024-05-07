<?php

use Instride\Bundle\PimcoreMonitorBundle\PimcoreMonitorBundle;
use Pimcore\Bundle\ApplicationLoggerBundle\PimcoreApplicationLoggerBundle;
use Pimcore\Bundle\SeoBundle\PimcoreSeoBundle;
use Pimcore\Bundle\SimpleBackendSearchBundle\PimcoreSimpleBackendSearchBundle;
use Pimcore\Bundle\TinymceBundle\PimcoreTinymceBundle;
use SeoBundle\SeoBundle;
use Symfony\WebpackEncoreBundle\WebpackEncoreBundle;
use ToolboxBundle\ToolboxBundle;

return [
    PimcoreApplicationLoggerBundle::class => ['all' => true],
    PimcoreSeoBundle::class => ['all' => true],
    PimcoreSimpleBackendSearchBundle::class => ['all' => true],
    PimcoreTinymceBundle::class => ['all' => true],
    PimcoreMonitorBundle::class => ['all' => true],
    SeoBundle::class => ['all' => true],
    ToolboxBundle::class => ['all' => true],
    WebpackEncoreBundle::class => ['all' => true],
];
