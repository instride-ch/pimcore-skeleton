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

namespace AppBundle\Helper;

class StringHelper
{
    /**
     * Kebab-cases a string.
     *
     * @param string $string The string
     * @param string $glue The string used to glue the words together (default is a hyphen)
     * @param bool $lower Whether the string should be lower-cased (default is true)
     * @param bool $removePunctuation Whether punctuation marks should be removed (default is true)
     * @return string The kebab-cased string
     */
    public static function toKebabCase(string $string, string $glue = '-', bool $lower = true, bool $removePunctuation = true): string
    {
        $words = self::_prepStringForCasing($string, $lower, $removePunctuation);

        return implode($glue, $words);
    }

    /**
     * Splits a string into an array of the words in the string
     *
     * @param string $string The string
     * @return string[] The words in the string
     */
    private static function splitOnWords(string $string): array
    {
        // Split on anything that is not alphanumeric, or a period, underscore, or hyphen
        // Reference: http://www.regular-expressions.info/unicode.html
        preg_match_all('/[\p{L}\p{N}\p{M}\._-]+/u', $string, $matches);

        return self::filterEmptyStringsFromArray($matches[0]);
    }

    /**
     * Converts all characters in the string to lowercase
     *
     * @param string $str The string to convert to lowercase
     * @return string The lowercase string
     */
    private static function toLowerCase(string $str): string
    {
        return mb_strtolower($str, 'UTF-8');
    }

    /**
     * Filters empty strings from an array
     *
     * @param array $arr
     * @return array
     */
    private static function filterEmptyStringsFromArray(array $arr): array
    {
        return array_filter($arr, function($value): bool {
            return $value !== '';
        });
    }

    /**
     * Prepares a string for casing routines.
     *
     * @param string $string The string
     * @param bool $lower
     * @param bool $removePunctuation Whether punctuation marks should be removed (default is true)
     * @return string[] The prepped words in the string
     * @see toKebabCase()
     * @see toCamelCase()
     * @see toPascalCase()
     * @see toSnakeCase()
     */
    private static function _prepStringForCasing(string $string, bool $lower = true, bool $removePunctuation = true): array
    {
        // Convert CamelCase to multiple words
        $string = preg_replace('/(?<![A-Z])[A-Z]/u', ' \0', $string);

        if ($lower) {
            // Make it lowercase
            $string = static::toLowerCase($string);
        }

        if ($removePunctuation) {
            $string = str_replace(['.', '_', '-'], ' ', $string);
        }

        // Remove inner-word punctuation.
        $string = preg_replace('/[\'"‘’“”\[\]\(\)\{\}:]/u', '', $string);

        // Split on the words and return
        return static::splitOnWords($string);
    }
}