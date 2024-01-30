import {  EntryFieldTypes } from "contentful"
import { Document } from '@contentful/rich-text-types'

export type BlogPostSkeleton =
{
  contentTypeId: "blog",
  fields: {
    title: EntryFieldTypes.Text,
    body: EntryFieldTypes.RichText,
  }
}

export type BlogPostFields = {
  title: string,
  body: Document,
  id: string
}
