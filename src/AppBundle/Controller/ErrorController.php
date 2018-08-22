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

namespace AppBundle\Controller;

use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\Response;

class ErrorController extends FrontendController
{
    /**
     * @return Response
     */
    public function errorAction(): Response
    {
        return $this->renderTemplate('Error/error.html.twig');
    }
}
