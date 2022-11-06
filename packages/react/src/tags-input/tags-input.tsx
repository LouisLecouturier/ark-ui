import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import type { ReactNode } from 'react'
import { ark, HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import { splitProps, type Assign } from '../split-props'
import { TagsInputProvider } from './tags-input-context'
import { useTagsInput, UseTagsInputProps } from './use-tags-input'

export type TagsInputProps = Assign<
  Assign<HTMLArkProps<'input'>, UseTagsInputProps>,
  {
    children: ReactNode | ((pages: UseTagsInputProps) => ReactNode)
  }
>

export const TagsInput = forwardRef<'input', TagsInputProps>((props, ref) => {
  const [useTagsInputProps, { children, ...inputProps }] = splitProps(props, [
    'addOnPaste',
    'allowEditTag',
    'allowOverflow',
    'autoFocus',
    'blurBehavior',
    'defaultValue',
    'delimiter',
    'dir',
    'disabled',
    'getRootNode',
    'ids',
    'inputValue',
    'invalid',
    'max',
    'maxLength',
    'name',
    'onChange',
    'onHighlight',
    'onInvalid',
    'onTagUpdate',
    'readonly',
    'translations',
    'validate',
    'value',
  ])
  const tagsInput = useTagsInput(useTagsInputProps)
  const mergedProps = mergeProps(tagsInput.rootProps, inputProps)
  const view = runIfFn(children, tagsInput)

  return (
    <TagsInputProvider value={tagsInput}>
      <ark.div {...mergedProps} ref={ref}>
        {view}
      </ark.div>
    </TagsInputProvider>
  )
})
