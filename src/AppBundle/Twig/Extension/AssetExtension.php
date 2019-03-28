<?php

declare(strict_types=1);

/**
 * w-vision
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright  Copyright (c) 2019 w-vision AG (https://www.w-vision.ch)
 */

namespace AppBundle\Twig\Extension;

use Pimcore\Model\Asset\Image;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AssetExtension extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('uikit_image', [$this, 'getUIkitImage'], ['is_safe' => ['html']]),
        ];
    }

    /**
     * Generates HTML attributes, which can be used for UIkit's Image component
     *
     * @param Image\Thumbnail $thumbnail
     * @param bool $backgroundImage
     * @param array $options
     * @return string
     */
    public function getUIkitImage(Image\Thumbnail $thumbnail, $backgroundImage = false, array $options = []): string
    {
        $attributes = [];
        $image = $thumbnail->getAsset();
        $thumbConfig = $thumbnail->getConfig();

        // Define width and height
        $width = $thumbnail->getWidth();
        $height = $thumbnail->getHeight();

        if ($width && !$backgroundImage) {
            $attributes['width'] = $width;
        }

        if ($height && !$backgroundImage) {
            $attributes['height'] = $height;
        }

        // Define the default src
        if ($this->useOriginalFile($image->getFullPath(), $thumbConfig)) {
            $attributes['data-src'] = $image->getFullPath();
        } else {
            $attributes['data-src'] = $thumbnail->getPath();

            // Generate source set
            if ($thumbConfig) {
                // Source set and sizes
                if ($thumbConfig->hasMedias()) {
                    $mediaSrcSet = $this->generateMediaSrcSet($image, $thumbConfig);
                    $attributes['data-srcset'] = $mediaSrcSet['srcset'];
                    $attributes['data-sizes'] = $mediaSrcSet['sizes'];
                } // High resolution source set
                else {
                    $attributes['data-srcset'] = $this->generateHighResSrcSet($image, $thumbConfig);
                }
            }
        }

        // Metadata (alt and title with copyright)
        if (!$backgroundImage) {
            $titleText = null;
            if ($image->getMetadata('title')) {
                $titleText = $image->getMetadata('title');
            }

            if ($image->getMetadata('alt')) {
                $altText = $image->getMetadata('alt');
            } else {
                $altText = $titleText;
            }

            if ($image->getMetadata('copyright')) {
                if (!empty($altText)) {
                    $altText .= ' | ';
                }

                if (!empty($titleText)) {
                    $titleText .= ' | ';
                }

                $altText .= sprintf('© %s', $image->getMetadata('copyright'));
                $titleText .= sprintf('© %s', $image->getMetadata('copyright'));
            }

            $attributes['alt'] = $altText;
            if (!empty($titleText)) {
                $attributes['title'] = $titleText;
            }
        }

        // Add image component
        $attributes['data-uk-img'] = null;
        if (null !== $options) {
            $attributes['data-uk-img'] = implode('; ', array_map(
                static function ($key, $value) {
                    return sprintf('%s: %s', $key, $value);
                },
                array_keys($options),
                $options
            ));
        }

        return array_to_html_attribute_string($attributes);
    }

    /**
     * Generates a high resolution source set of the image
     *
     * @param Image $image
     * @param Image\Thumbnail\Config $config
     * @return string
     */
    private function generateHighResSrcSet(Image $image, Image\Thumbnail\Config $config): string
    {
        $srcSetValues = [];

        foreach ([1, 2] as $highRes) {
            $config->setHighResolution($highRes);
            $thumbnail = $image->getThumbnail($config);

            $srcSetValues[] = sprintf('%s %sx', $thumbnail, $highRes);
        }

        return implode(', ', $srcSetValues);
    }

    /**
     * Generates a media source set of the image
     *
     * @param Image $image
     * @param Image\Thumbnail\Config $config
     * @return array
     */
    private function generateMediaSrcSet(Image $image, Image\Thumbnail\Config $config): array
    {
        $media = [];

        $mediaConfigs = $config->getMedias();
        ksort($mediaConfigs, SORT_NUMERIC);
        $mediaConfigs[] = $config->getItems();
        $config->setHighResolution(1);

        foreach ($mediaConfigs as $mediaQuery => $mediaConfig) {
            $thumbWidth = null;

            if ($mediaQuery) {
                $thumbWidth = rtrim($mediaQuery, 'w');
                $config->selectMedia($mediaQuery);

                $media['sizes'][] = sprintf('(max-width: %spx) %spx', $thumbWidth, $thumbWidth);
            } else {
                foreach ($mediaConfig as $item) {
                    if (isset($item['arguments']['width'])) {
                        $thumbWidth = $item['arguments']['width'];
                        $mediaQuery = sprintf('%sw', $thumbWidth);
                        break;
                    }
                }

                $config->setItems($mediaConfig);
                $config->setFilenameSuffix($mediaQuery);

                $media['sizes'][] = sprintf('%spx', $thumbWidth);
            }

            $thumbnail = $image->getThumbnail($config);
            if (null === $media['srcset'] || !array_key_exists($mediaQuery, $media['srcset'])) {
                $media['srcset'][$mediaQuery] = sprintf('%s %s', $thumbnail, $mediaQuery);
            }
            $thumbnail->reset();
        }

        return [
            'srcset' => implode(', ', $media['srcset']),
            'sizes' => implode(', ', $media['sizes'])
        ];
    }

    /**
     * Detects whether the original file is to be used or not
     *
     * @param string $filename
     * @param Image\Thumbnail\Config $config
     * @return bool
     */
    private function useOriginalFile($filename, Image\Thumbnail\Config $config): bool
    {
        return $config && !$config->isRasterizeSVG() && preg_match('@\.svgz?$@', $filename);
    }
}
