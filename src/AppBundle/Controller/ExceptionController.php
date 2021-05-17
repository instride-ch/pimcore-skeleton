<?php

declare(strict_types=1);

/**
 * w-vision.
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright  Copyright (c) 2020 w-vision AG (https://www.w-vision.ch)
 */

namespace AppBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Response;

class ExceptionController extends FrontendController
{
    public function errorAction(): Response
    {
        $this->get('coreshop.seo.presentation')->updateSeoMetadata($this->document);

        return $this->renderTemplate('Exception/error.html.twig');
    }
}
