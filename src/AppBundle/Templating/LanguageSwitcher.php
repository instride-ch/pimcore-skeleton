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

namespace AppBundle\Templating;

use Pimcore\Model\Document;
use Pimcore\Tool;

class LanguageSwitcher
{
    /**
     * @var Document\Service
     */
    protected $documentService;

    /**
     * @param Document\Service $documentService
     */
    public function __construct(Document\Service $documentService)
    {
        $this->documentService = $documentService;
    }

    /**
     * Returns an array with all localized links of a document
     *
     * @param Document $document
     * @return array
     */
    public function getLocalizedLinks(Document $document): array
    {
        $translations = $this->documentService->getTranslations($document);

        $links = [];
        foreach (Tool::getValidLanguages() as $language) {
            $target = sprintf('/%s', $language);

            if (isset($translations[$language])) {
                $localizedDocument = Document::getById($translations[$language]);

                if ($localizedDocument instanceof Document) {
                    $target = $localizedDocument->getFullPath();
                }
            }

            $links[$target]['display'] = \Locale::getDisplayLanguage($language);
            $links[$target]['isActive'] = $document->getProperty('language') === $language;
        }

        return $links;
    }
}
