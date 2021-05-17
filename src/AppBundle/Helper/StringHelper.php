<?php

declare(strict_types=1);

/**
 * w-vision AG.
 *
 * LICENSE
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that is distributed with this source code.
 *
 * @copyright  Copyright (c) 2020 w-vision AG (https://www.w-vision.ch)
 */

namespace AppBundle\Helper;

use Stringy\Stringy as BaseStringy;

final class StringHelper
{
    /**
     * Reverse function for `nl2br`.
     *
     * @return string|string[]|null
     */
    public static function br2nl(string $string)
    {
        return preg_replace('/<br\\s*?\/??>/i', '', $string);
    }

    /**
     * Returns the first letter of a string.
     */
    public static function initial(string $string, bool $uppercase = true): string
    {
        return $uppercase ? self::toUpperCase($string[0]) : $string[0];
    }

    /**
     * Checks whether the value is a timestamp or not.
     *
     * @param int|float $timestamp
     */
    public static function isValidTimeStamp($timestamp): bool
    {
        $check = (\is_int($timestamp) || \is_float($timestamp))
            ? $timestamp
            : (string) (int) $timestamp;

        return ($check === $timestamp)
            && ((int) $timestamp <= PHP_INT_MAX)
            && ((int) $timestamp >= ~PHP_INT_MAX);
    }

    /**
     * Truncates the string to a given length, while ensuring that it does not split words. If $substring is provided,
     * and truncating occurs, the string is further truncated so that the substring may be appended without exceeding t
     * he desired length.
     *
     * @param string $str       the string to truncate
     * @param int    $length    the desired length of the truncated string
     * @param string $substring the substring to append if it can fit
     *
     * @return string the resulting string after truncating
     */
    public static function safeTruncate(string $str, int $length, string $substring = '...'): string
    {
        return (string) BaseStringy::create($str)->safeTruncate($length, $substring);
    }

    /**
     * Splits a string into an array of the words in the string.
     *
     * @param string $string The string
     *
     * @return string[] The words in the string
     */
    public static function splitOnWords(string $string): array
    {
        // Split on anything that is not alphanumeric, or a period, underscore, or hyphen
        // Reference: http://www.regular-expressions.info/unicode.html
        preg_match_all('/[\p{L}\p{N}\p{M}._-]+/u', $string, $matches);

        return ArrayHelper::filterEmptyStringsFromArray($matches[0]);
    }

    /**
     * Strips all whitespaces from a string.
     */
    public static function stripWhitespaces(string $string): string
    {
        return preg_replace('/\s+/', '', $string);
    }

    /**
     * Kebab-cases a string.
     *
     * @param string $string            The string
     * @param string $glue              The string used to glue the words together (default is a hyphen)
     * @param bool   $lower             Whether the string should be lower-cased (default is true)
     * @param bool   $removePunctuation Whether punctuation marks should be removed (default is true)
     *
     * @return string The kebab-cased string
     */
    public static function toKebabCase(string $string, string $glue = '-', bool $lower = true, bool $removePunctuation = true): string
    {
        $words = self::prepStringForCasing($string, $lower, $removePunctuation);

        return implode($glue, $words);
    }

    /**
     * Converts all characters in the string to lowercase.
     *
     * @param string $str The string to convert to lowercase
     *
     * @return string The lowercase string
     */
    public static function toLowerCase(string $str): string
    {
        return mb_strtolower($str, 'UTF-8');
    }

    /**
     * Removes protocol and trailing slashes from a website's url.
     */
    public static function toPrettyUrl(string $url): string
    {
        return trim(preg_replace('(^https?://)', '', $url), '/');
    }

    /**
     * Returns a lowercase and trimmed string separated by underscores. Underscores are inserted before uppercase
     * characters (with the exception of the first character of the string), and in place of spaces as well as dashes.
     */
    public static function toUnderscored(string $str): string
    {
        return (string) BaseStringy::create($str)->underscored();
    }

    /**
     * Converts all characters in the string to uppercase.
     *
     * @param string $str The string to convert to uppercase
     *
     * @return string The uppercase string
     */
    public static function toUpperCase(string $str): string
    {
        return mb_strtoupper($str, 'UTF-8');
    }

    /**
     * Prepares a string for casing routines.
     *
     * @param string|array $string            The string
     * @param bool         $removePunctuation Whether punctuation marks should be removed (default is true)
     *
     * @return string[] The prepped words in the string
     */
    private static function prepStringForCasing($string, bool $lower = true, bool $removePunctuation = true): array
    {
        // Convert CamelCase to multiple words
        $string = preg_replace('/(?<![A-Z])[A-Z]/u', ' \0', $string);

        if ($lower) {
            // Make it lowercase
            $string = self::toLowerCase($string);
        }

        if ($removePunctuation) {
            $string = str_replace(['.', '_', '-'], ' ', $string);
        }

        // Remove inner-word punctuation.
        $string = preg_replace('/[\'"‘’“”\[\](){}:]/u', '', $string);

        // Split on the words and return
        return self::splitOnWords($string);
    }
}
