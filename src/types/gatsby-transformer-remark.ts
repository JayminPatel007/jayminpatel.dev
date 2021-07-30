export interface Data<T> {
  data: T
}

export interface AllMarkDownRemarkData {
  allMarkdownRemark: AllMarkDownRemark
}

export interface AllMarkDownRemark {
  totalCount?: number;
  edges?: MarkDownRemarkEdge[];
  nodes?: MarkDownRemark[];
  pageInfo?: PageInfo;
  distinct?: string[];
  max?: number;
  min?: number;
  sum?: number;
  group?: MarkDownRemarkGroupConnection[]
}

export interface MarkDownRemarkEdge {
  next?: MarkDownRemark;
  node?: MarkDownRemark;
  previous?: MarkDownRemark;
}

export interface MarkDownRemark {
  id?: string;
  frontmatter?: MarkDownRemarkFrontmatter;
  fields: {
    slug: string;
  };
  excerpt?: string;
  rawMarkdownBody?: string;
  fileAbsolutePath?: string;
  html?: string;
  htmlAst?: JSON;
  excerptAst?: JSON;
  headings?: MarkDownHeading[];
  timeToRead?: number;
  tableOfContents?: string;
  wordCount?: string;
  parent?: Node_GS;
  children?: Node_GS;
  internal?: Internal;
}

export interface MarkDownRemarkFrontmatter {
  title?: string;
  date?: Date;
  tags?: string[];
  titleImage?: any;
}

export interface MarkDownHeading {
  id?: string;
  value?: string;
  depth?: number;
}

export interface Node_GS {
  id?: string;
  parent?: Node_GS;
  children?: Node_GS[];
  internal?: Internal;
}

export interface Internal {
  content?: string;
  contentDigest?: string;
  description?: string;
  fieldOwners?: string[];
  ignoreType?: boolean;
  mediaType?: string;
  owner?: string;
  type?: string;
}

export interface PageInfo {
  currentPage?: number;
  hasPreviousPag?: boolean;
  hasNextPage?: boolean;
  itemCount?: number;
  pageCount?: number;
  perPage?: number;
  totalCount?: number;
}

export interface MarkDownRemarkGroupConnection {
  totalCount?: number;
  edges?: MarkDownRemarkEdge[];
  nodes?: MarkDownRemark[];
  pageInfo?: PageInfo;
  field?: string;
  fieldValue?: string;
}
