<?php
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

use ParentIterator;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;

final class ArrayHelper
{
    /**
     * Recursively searches a multidimensional array for a value.
     * If that value is found, it returns the key and value of the array the value was found in.
     *
     * @param mixed $needle
     * @param array $haystack
     * @param bool  $strict
     *
     * @return array
     */
    public static function arraySearchRecursive($needle, array $haystack, $strict = false): array
    {
        $path = [];

        if (!is_array($haystack)) {
            $haystack = [];
        }

        $iterator = new RecursiveIteratorIterator(
            new ParentIterator(new RecursiveArrayIterator($haystack)),
            RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $key => $value) {
            if (in_array($needle, $value, $strict)) {
                $path = [$key, $value];

                break;
            }
        }

        return $path;
    }

    /**
     * Filters empty strings from an array.
     *
     * @param array $array
     *
     * @return array
     */
    public static function filterEmptyStringsFromArray(array $array): array
    {
        return array_filter($array, static function ($value): bool {
            return $value !== '';
        });
    }

    /**
     * in_array search for multidimensional arrays.
     *
     * @param mixed $needle
     * @param array $haystack
     * @param bool  $strict
     *
     * @return bool
     */
    public static function inArrayRecursive($needle, array $haystack, $strict = false): bool
    {
        foreach ($haystack as $item) {
            if ((is_array($item) && static::inArrayRecursive($needle, $item, $strict)) ||
                ($strict ? $item === $needle : $item == $needle)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returns a comma separated string containing question marks for the amount of passed items.
     * This is used to inject array values in a SQL condition.
     *
     * @param array $items
     *
     * @return string
     */
    public static function sqlBinders(array $items): string
    {
        return implode(',', array_fill(0, count($items), '?'));
    }
}
