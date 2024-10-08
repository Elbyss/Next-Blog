import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    content: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    thumbnail: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          // theme: 'one-dark-pro',
          theme: 'one-light',
          defaultLang: 'plaintext',
        },
      ],
    ],
  },
});
2;
