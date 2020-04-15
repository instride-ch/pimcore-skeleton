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

use AppBundle\Helper\StringHelper;
use Pimcore\Controller\FrontendController;
use Pimcore\Model\Document;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends FrontendController
{
    /**
     * @return Response
     */
    public function defaultAction(): Response
    {
        $this->get('coreshop.seo.presentation')->updateSeoMetadata($this->document);

        return $this->renderTemplate('Default/default.html.twig');
    }

    /**
     * @return Response
     */
    public function legalsAction(): Response
    {
        $this->get('coreshop.seo.presentation')->updateSeoMetadata($this->document);

        $scrollSpyNav = [];
        $block = $this->document->getElement('legalsBlock');

        if ($block instanceof Document\Tag\Block && !$block->isEmpty()) {
            foreach ($block->getElements() as $item) {
                $input = $item->getElement('itemTitle');

                if (!$input instanceof Document\Tag\Input || $input->isEmpty()) {
                    continue;
                }

                $scrollSpyNav[] = [
                    'id' => StringHelper::toKebabCase($input->getName()),
                    'data' => $input->getData(),
                ];
            }
        }

        return $this->renderTemplate('Default/legals.html.twig', [
            'scrollSpyNav' => $scrollSpyNav,
        ]);
    }
}
