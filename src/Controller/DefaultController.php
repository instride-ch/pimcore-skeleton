<?php

declare(strict_types=1);

namespace App\Controller;

use Pimcore\Controller\FrontendController;
use Pimcore\Version;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends FrontendController
{
    public function defaultAction(): Response
    {
        return $this->render('default/default.html.twig', [
            'version' => Version::getVersion(),
        ]);
    }
}
