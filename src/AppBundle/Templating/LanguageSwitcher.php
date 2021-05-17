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

namespace AppBundle\Templating;

use Pimcore\Model\Document;
use Pimcore\Tool;

final class LanguageSwitcher
{
    private Document\Service $documentService;

    public function __construct(Document\Service $documentService)
    {
        $this->documentService = $documentService;
    }

    /**
     * Returns an array with all localized links of a document.
     */
    public function getLocalizedLinks(Document $document, string $locale): array
    {
        $translations = $this->documentService->getTranslations($document);

        $links = [];
        foreach (Tool::getValidLanguages() as $language) {
            $target = sprintf('/%s', $language);

            // Skip if root document for locale is missing
            if (!(Document::getByPath($target) instanceof Document)) {
                continue;
            }

            if (isset($translations[$language])) {
                $localizedDocument = Document::getById($translations[$language]);

                if ($localizedDocument instanceof Document) {
                    $target = $localizedDocument->getFullPath(true);
                }
            }

            $links[$target] = [
                'isActive' => $locale === $language,
                'display' => $language,
            ];
        }

        return $links;
    }
}
