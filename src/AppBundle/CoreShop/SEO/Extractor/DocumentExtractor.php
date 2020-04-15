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

namespace AppBundle\CoreShop\SEO\Extractor;

use AppBundle\Helper\StringHelper;
use CoreShop\Component\SEO\Extractor\ExtractorInterface;
use CoreShop\Component\SEO\Model\SEOMetadataInterface;
use Pimcore\Config;
use Pimcore\Model\Document;
use Pimcore\Tool;
use Symfony\Component\HttpFoundation\RequestStack;

final class DocumentExtractor implements ExtractorInterface
{
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * @var mixed|Config\Config
     */
    private $websiteConfig;

    /**
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
        $this->websiteConfig = Config::getWebsiteConfig();
    }

    /**
     * {@inheritdoc}
     */
    public function supports($object): bool
    {
        return $object instanceof Document\Page && $object->getProperty('og:image');
    }

    /**
     * {@inheritdoc}
     */
    public function updateMetadata($object, SEOMetadataInterface $seoMetadata): void
    {
        $masterRequest = $this->requestStack->getMasterRequest();

        if (null === $masterRequest) {
            return;
        }

        $hostUrl = Tool::getHostUrl();

        // Open Graph
        $seoMetadata->addExtraProperty('og:title', StringHelper::safeTruncate($object->getTitle(), 60));
        $seoMetadata->addExtraProperty('og:description', StringHelper::safeTruncate($object->getDescription(), 170));
        $seoMetadata->addExtraProperty('og:image', $hostUrl . $object->getProperty('og:image')->getThumbnail('open-graph__default'));
        $seoMetadata->addExtraProperty('og:url', $hostUrl . $masterRequest->getPathInfo());
        $seoMetadata->addExtraProperty('og:locale', $masterRequest->getLocale());
        $seoMetadata->addExtraProperty('og:site_name', $this->websiteConfig->get('name'));

        // Twitter
        $seoMetadata->addExtraName('twitter:card', 'summary_large_image');
        $seoMetadata->addExtraName('twitter:image:alt', StringHelper::safeTruncate($object->getTitle(), 60));
    }
}
