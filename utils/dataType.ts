type properties = {
  Description: { id: string; type: string; rich_text: rich_text[] };
  Github: { id: string; type: string; url: null };
  Name: { id: string; type: string; title: title[] };
  Tags: { id: string; type: string; multi_select: [] };
  WorkPeriod: { id: string; type: string; date: date };
  Youtube: { id: string; type: string; url: null };
  url: string;
};
type cover = {
  external: { url: string };
  type: string;
};
type title = {
  type: string;
  text: text[];
  annotations: annotation;
  plain_text: string;
  href: string;
};
type text = {
  content: string;
  link: string;
};
type annotation = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};
type file = {
  external: { url: string };
  type: string;
};
type rich_text = {
  annotations: annotations;
  href: string;
  plain_text: string;
  text: { content: string; link: string };
  type: string;
};
type annotations = {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};
type date = {
  end: string;
  start: string;
  time_zone: string;
};

export type dataType = {
  properties: properties;
  cover: cover;
};

export type tag = {
  id: string;
  color: string;
  name: string;
};
