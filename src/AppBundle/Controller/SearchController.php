<?php
/**
 * w-vision
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
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SearchController extends FrontendController
{
    /**
     * @param Request $request
     * @return Response
     */
    public function searchAction(Request $request): Response
    {
        $bundle = 'LuceneSearchBundle';

        if (!array_key_exists($bundle, $this->getParameter('kernel.bundles'))) {
            throw $this->createNotFoundException(sprintf('%s does not exist', $bundle));
        }

        return $this->renderTemplate('Search/search.html.twig', [
            'query' => $request->get('q'),
        ]);
    }
}
