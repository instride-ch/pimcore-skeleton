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

use AppBundle\Helper\StringHelper;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

final class StringExtension extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    public function getFilters(): array
    {
        return [
            new TwigFilter('kebab', [$this, 'kebabFilter']),
            new TwigFilter('tel', [$this, 'telLink']),
            new TwigFilter('url', [$this, 'formattedUrl']),
        ];
    }

    /**
     * Kebab-cases a string
     *
     * @param string $string The string
     * @param string $glue The string used to glue the words together (default is a hyphen)
     * @param bool $lower Whether the string should be lower-cased (default is true)
     * @param bool $removePunctuation Whether punctuation marks should be removed (default is true)
     * @return string The kebab-cased string
     */
    public function kebabFilter(string $string, string $glue = '-', bool $lower = true, bool $removePunctuation = true): string
    {
        return StringHelper::toKebabCase($string, $glue, $lower, $removePunctuation);
    }

    /**
     * Turns a phone number into a tel: link
     *
     * @param $phoneNumber
     * @return string
     */
    public function telLink(string $phoneNumber): string
    {
        return sprintf('tel:%s', StringHelper::removeWhitespaces($phoneNumber));
    }

    /**
     * Returns a pretty URL
     *
     * @param $url
     * @return string
     */
    public function formattedUrl($url): string
    {
        return StringHelper::toPrettyUrl($url);
    }
}