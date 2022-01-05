<?php

declare(strict_types=1);

namespace App;

use Pimcore\HttpKernel\BundleCollection\BundleCollection;
use Pimcore\Kernel as PimcoreKernel;

class Kernel extends PimcoreKernel
{
    /**
     * Adds bundles to register to the bundle collection. The collection is able
     * to handle priorities and environment specific bundles.
     */
    public function registerBundlesToCollection(BundleCollection $collection): void
    {
    }
}
