<?php
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

namespace AppBundle\Helper;

final class ArrayHelper
{
    /**
     * Filters empty strings from an array
     *
     * @param array $arr
     * @return array
     */
    public static function filterEmptyStringsFromArray(array $arr): array
    {
        return array_filter($arr, static function ($value): bool {
            return $value !== '';
        });
    }

    /**
     * \in_array search for multidimensional arrays
     *
     * @param $needle
     * @param array $haystack
     * @param bool $strict
     * @return bool
     */
    public static function inArrayRecursive($needle, array $haystack, $strict = false): bool
    {
        foreach ($haystack as $item) {
            if (
                (\is_array($item) && static::inArrayRecursive($needle, $item, $strict)) ||
                ($strict ? $item === $needle : $item == $needle)
            ) {
                return true;
            }
        }

        return false;
    }

    /**
     * Recursively searches a multidimensional array for a value.
     * If that value is found, it returns the key and value of the array the value was found in.
     *
     * @param $needle
     * @param $haystack
     * @param bool $strict
     * @return array
     */
    public static function arraySearchRecursive($needle, $haystack, $strict = false): array
    {
        $path = [];

        if (!\is_array($haystack)) {
            $haystack = [];
        }

        $iterator = new \RecursiveIteratorIterator(
            new \ParentIterator(new \RecursiveArrayIterator($haystack)),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $key => $value) {
            if (\in_array($needle, $value, $strict)) {
                $path = [$key, $value];
                break;
            }
        }

        return $path;
    }
}