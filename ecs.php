<?php

declare(strict_types=1);

use PhpCsFixer\Fixer\Alias\NoMixedEchoPrintFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoMultilineWhitespaceAroundDoubleArrowFixer;
use PhpCsFixer\Fixer\ArrayNotation\NormalizeIndexBraceFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoTrailingCommaInSinglelineArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\NoWhitespaceBeforeCommaInArrayFixer;
use PhpCsFixer\Fixer\ArrayNotation\TrimArraySpacesFixer;
use PhpCsFixer\Fixer\ArrayNotation\WhitespaceAfterCommaInArrayFixer;
use PhpCsFixer\Fixer\Basic\BracesFixer;
use PhpCsFixer\Fixer\Casing\MagicConstantCasingFixer;
use PhpCsFixer\Fixer\Casing\NativeFunctionCasingFixer;
use PhpCsFixer\Fixer\CastNotation\CastSpacesFixer;
use PhpCsFixer\Fixer\CastNotation\LowercaseCastFixer;
use PhpCsFixer\Fixer\CastNotation\NoShortBoolCastFixer;
use PhpCsFixer\Fixer\CastNotation\ShortScalarCastFixer;
use PhpCsFixer\Fixer\ClassNotation\ClassAttributesSeparationFixer;
use PhpCsFixer\Fixer\ClassNotation\ClassDefinitionFixer;
use PhpCsFixer\Fixer\ClassNotation\NoBlankLinesAfterClassOpeningFixer;
use PhpCsFixer\Fixer\ClassNotation\NoUnneededFinalMethodFixer;
use PhpCsFixer\Fixer\ClassNotation\ProtectedToPrivateFixer;
use PhpCsFixer\Fixer\ClassNotation\SelfAccessorFixer;
use PhpCsFixer\Fixer\ClassNotation\SingleClassElementPerStatementFixer;
use PhpCsFixer\Fixer\Comment\NoEmptyCommentFixer;
use PhpCsFixer\Fixer\Comment\SingleLineCommentStyleFixer;
use PhpCsFixer\Fixer\ControlStructure\IncludeFixer;
use PhpCsFixer\Fixer\ControlStructure\NoTrailingCommaInListCallFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededControlParenthesesFixer;
use PhpCsFixer\Fixer\ControlStructure\NoUnneededCurlyBracesFixer;
use PhpCsFixer\Fixer\FunctionNotation\FunctionTypehintSpaceFixer;
use PhpCsFixer\Fixer\FunctionNotation\MethodArgumentSpaceFixer;
use PhpCsFixer\Fixer\FunctionNotation\ReturnTypeDeclarationFixer;
use PhpCsFixer\Fixer\FunctionNotation\VoidReturnFixer;
use PhpCsFixer\Fixer\Import\NoLeadingImportSlashFixer;
use PhpCsFixer\Fixer\Import\NoUnusedImportsFixer;
use PhpCsFixer\Fixer\LanguageConstruct\DeclareEqualNormalizeFixer;
use PhpCsFixer\Fixer\NamespaceNotation\NoLeadingNamespaceWhitespaceFixer;
use PhpCsFixer\Fixer\NamespaceNotation\SingleBlankLineBeforeNamespaceFixer;
use PhpCsFixer\Fixer\Operator\BinaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\Operator\ConcatSpaceFixer;
use PhpCsFixer\Fixer\Operator\IncrementStyleFixer;
use PhpCsFixer\Fixer\Operator\NewWithBracesFixer;
use PhpCsFixer\Fixer\Operator\ObjectOperatorWithoutWhitespaceFixer;
use PhpCsFixer\Fixer\Operator\StandardizeIncrementFixer;
use PhpCsFixer\Fixer\Operator\StandardizeNotEqualsFixer;
use PhpCsFixer\Fixer\Operator\TernaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\Operator\UnaryOperatorSpacesFixer;
use PhpCsFixer\Fixer\Phpdoc\GeneralPhpdocTagRenameFixer;
use PhpCsFixer\Fixer\Phpdoc\NoEmptyPhpdocFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocAlignFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocAnnotationWithoutDotFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocIndentFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocInlineTagNormalizerFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocNoAccessFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocNoAliasTagFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocNoEmptyReturnFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocNoPackageFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocNoUselessInheritdocFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocReturnSelfReferenceFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocScalarFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocSeparationFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocSingleLineVarSpacingFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocSummaryFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocTrimFixer;
use PhpCsFixer\Fixer\Phpdoc\PhpdocTypesFixer;
use PhpCsFixer\Fixer\PhpTag\BlankLineAfterOpeningTagFixer;
use PhpCsFixer\Fixer\PhpUnit\PhpUnitFqcnAnnotationFixer;
use PhpCsFixer\Fixer\Semicolon\NoEmptyStatementFixer;
use PhpCsFixer\Fixer\Semicolon\NoSinglelineWhitespaceBeforeSemicolonsFixer;
use PhpCsFixer\Fixer\Semicolon\SemicolonAfterInstructionFixer;
use PhpCsFixer\Fixer\Semicolon\SpaceAfterSemicolonFixer;
use PhpCsFixer\Fixer\StringNotation\SingleQuoteFixer;
use PhpCsFixer\Fixer\Whitespace\BlankLineBeforeStatementFixer;
use PhpCsFixer\Fixer\Whitespace\NoExtraBlankLinesFixer;
use PhpCsFixer\Fixer\Whitespace\NoSpacesAroundOffsetFixer;
use PhpCsFixer\Fixer\Whitespace\NoWhitespaceInBlankLineFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;
use Symplify\EasyCodingStandard\ValueObject\Option;
use Symplify\EasyCodingStandard\ValueObject\Set\SetList;

return static function (ECSConfig $ecsConfig): void {
    // A. Paths
    $ecsConfig->paths([
        __DIR__ . '/src',
        __DIR__ . '/ecs.php',
    ]);

    // B. Rules
    $ecsConfig->ruleWithConfiguration(BracesFixer::class, [
        'allow_single_line_closure' => true,
    ]);
    $ecsConfig->rule(BlankLineAfterOpeningTagFixer::class);
    $ecsConfig->ruleWithConfiguration(ConcatSpaceFixer::class, [
        'spacing' => 'one',
    ]);
    $ecsConfig->rule(NewWithBracesFixer::class);
    $ecsConfig->ruleWithConfiguration(PhpdocAlignFixer::class, [
        'tags' => [
            'method',
            'param',
            'property',
            'return',
            'throws',
            'type',
            'var',
        ],
    ]);
    $ecsConfig->rule(BinaryOperatorSpacesFixer::class);
    $ecsConfig->ruleWithConfiguration(IncrementStyleFixer::class, [
        'style' => 'post',
    ]);
    $ecsConfig->rule(UnaryOperatorSpacesFixer::class);
    $ecsConfig->rule(BlankLineBeforeStatementFixer::class);
    $ecsConfig->rule(CastSpacesFixer::class);
    $ecsConfig->rule(DeclareEqualNormalizeFixer::class);
    $ecsConfig->rule(FunctionTypehintSpaceFixer::class);
    $ecsConfig->ruleWithConfiguration(SingleLineCommentStyleFixer::class, [
        'comment_types' => [
            'hash',
        ],
    ]);
    $ecsConfig->rule(IncludeFixer::class);
    $ecsConfig->rule(LowercaseCastFixer::class);
    $ecsConfig->ruleWithConfiguration(ClassAttributesSeparationFixer::class, [
        'elements' => [
            'method' => 'one',
        ],
    ]);
    $ecsConfig->rule(NativeFunctionCasingFixer::class);
    $ecsConfig->rule(NoBlankLinesAfterClassOpeningFixer::class);
    $ecsConfig->rule(NoEmptyCommentFixer::class);
    $ecsConfig->rule(NoEmptyPhpdocFixer::class);
    $ecsConfig->rule(PhpdocSeparationFixer::class);
    $ecsConfig->rule(NoEmptyStatementFixer::class);
    $ecsConfig->ruleWithConfiguration(NoExtraBlankLinesFixer::class, [
        'tokens' => [
            'curly_brace_block',
            'extra',
            'parenthesis_brace_block',
            'parenthesis_brace_block',
            'square_brace_block',
            'throw',
            'use',
        ],
    ]);
    $ecsConfig->rule(NoLeadingNamespaceWhitespaceFixer::class);
    $ecsConfig->rule(NoMultilineWhitespaceAroundDoubleArrowFixer::class);
    $ecsConfig->rule(NoShortBoolCastFixer::class);
    $ecsConfig->rule(NoSinglelineWhitespaceBeforeSemicolonsFixer::class);
    $ecsConfig->rule(NoSpacesAroundOffsetFixer::class);
    $ecsConfig->rule(NoTrailingCommaInListCallFixer::class);
    $ecsConfig->rule(NoTrailingCommaInSinglelineArrayFixer::class);
    $ecsConfig->rule(NoUnneededControlParenthesesFixer::class);
    $ecsConfig->rule(NoWhitespaceBeforeCommaInArrayFixer::class);
    $ecsConfig->rule(NoWhitespaceInBlankLineFixer::class);
    $ecsConfig->rule(NormalizeIndexBraceFixer::class);
    $ecsConfig->rule(ObjectOperatorWithoutWhitespaceFixer::class);
    $ecsConfig->rule(PhpdocAnnotationWithoutDotFixer::class);
    $ecsConfig->rule(PhpdocIndentFixer::class);
    $ecsConfig->rule(PhpdocNoAccessFixer::class);
    $ecsConfig->rule(PhpdocNoEmptyReturnFixer::class);
    $ecsConfig->rule(PhpdocNoPackageFixer::class);
    $ecsConfig->rule(PhpdocNoUselessInheritdocFixer::class);
    $ecsConfig->rule(PhpdocReturnSelfReferenceFixer::class);
    $ecsConfig->rule(PhpdocScalarFixer::class);
    $ecsConfig->rule(PhpdocSingleLineVarSpacingFixer::class);
    $ecsConfig->rule(PhpdocSummaryFixer::class);
    $ecsConfig->rule(PhpdocTrimFixer::class);
    $ecsConfig->rule(PhpdocTypesFixer::class);
    $ecsConfig->rule(ReturnTypeDeclarationFixer::class);
    $ecsConfig->rule(SelfAccessorFixer::class);
    $ecsConfig->rule(ShortScalarCastFixer::class);
    $ecsConfig->rule(SingleQuoteFixer::class);
    $ecsConfig->rule(SpaceAfterSemicolonFixer::class);
    $ecsConfig->rule(StandardizeNotEqualsFixer::class);
    $ecsConfig->rule(TernaryOperatorSpacesFixer::class);
    $ecsConfig->rule(TrimArraySpacesFixer::class);
    $ecsConfig->rule(WhitespaceAfterCommaInArrayFixer::class);
    $ecsConfig->ruleWithConfiguration(ClassDefinitionFixer::class, [
        'single_line' => true,
    ]);
    $ecsConfig->rule(MagicConstantCasingFixer::class);
    $ecsConfig->rule(MethodArgumentSpaceFixer::class);
    $ecsConfig->ruleWithConfiguration(NoMixedEchoPrintFixer::class, [
        'use' => 'echo',
    ]);
    $ecsConfig->rule(NoLeadingImportSlashFixer::class);
    $ecsConfig->rule(NoUnusedImportsFixer::class);
    $ecsConfig->rule(PhpUnitFqcnAnnotationFixer::class);
    $ecsConfig->rule(PhpdocNoAliasTagFixer::class);
    $ecsConfig->rule(ProtectedToPrivateFixer::class);
    $ecsConfig->rule(SingleBlankLineBeforeNamespaceFixer::class);
    $ecsConfig->rule(SingleClassElementPerStatementFixer::class);

    // new since PHP-CS-Fixer 2.6
    $ecsConfig->rule(NoUnneededCurlyBracesFixer::class);
    $ecsConfig->rule(NoUnneededFinalMethodFixer::class);
    $ecsConfig->rule(SemicolonAfterInstructionFixer::class);

    // new since PHP-CS-Fixer 2.9
    $ecsConfig->rule(PhpdocInlineTagNormalizerFixer::class);
    $ecsConfig->rule(GeneralPhpdocTagRenameFixer::class);

    // new since 2.11
    $ecsConfig->rule(StandardizeIncrementFixer::class);

    // C. Sets
    $ecsConfig->sets([
        SetList::CLEAN_CODE,
        SetList::COMMON,
        SetList::PSR_12,
    ]);

    // D. Options
    $ecsConfig->cacheDirectory('var/cache/ecs');
    $ecsConfig->skip([
        VoidReturnFixer::class => [
            __DIR__ . '/src/Model/**/*',
        ],
    ]);

    // Enable Parallel Runs
    $ecsConfig->parallel();
};
