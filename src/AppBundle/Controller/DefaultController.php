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

use AppBundle\Helper\StringHelper;
use GuzzleHttp\Exception\GuzzleException;
use Pimcore\Controller\FrontendController;
use Pimcore\Model\Document;
use Symfony\Component\HttpFoundation\Response;
use WvisionBundle\Api\ImprintApi\ImprintApiInterface;

class DefaultController extends FrontendController
{
    public function defaultAction(): Response
    {
        return $this->renderTemplate('Default/default.html.twig');
    }

    public function legalsAction(ImprintApiInterface $imprintApi): Response
    {
        $imprint = $scrollSpyNav = [];
        $block = $this->getDocumentEditable('block', 'legalsBlock');

        if ($this->document->getProperty('loadImprintData')) {
            try {
                $imprint = $imprintApi->getData();
            } catch (GuzzleException $e) {
                // Do nothing here ...
            }
        }

        if ($block instanceof Document\Editable\Block && ! $block->isEmpty()) {
            $elements = $block->getElements();
            array_shift($elements);

            foreach ($elements as $item) {
                $input = $item->getEditable('itemTitle');

                if (! $input instanceof Document\Editable\Input || $input->isEmpty()) {
                    continue;
                }

                $data = $input->getData();

                $scrollSpyNav[] = [
                    'id' => StringHelper::toKebabCase($data),
                    'data' => $data,
                ];
            }
        }

        return $this->renderTemplate('Default/legals.html.twig', [
            'imprint' => $imprint,
            'scrollSpyNav' => $scrollSpyNav,
        ]);
    }
}
