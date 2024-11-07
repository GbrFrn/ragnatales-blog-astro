import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const CATEGORIES = [
  'Noticias',
  'Novidades',
  'Eventos',
  'Dicas',
  'Promoções',
  'DevLogs'
];

const POST_TEMPLATE = `---
title: "{title}"
description: "{description}"
pubDate: {pubDate}
updatedDate: {updatedDate}
heroImage: "{heroImage}"
categories: {categories}
author: "{author}"
---

# {title}

{content}

## Principais Pontos

{keyTakeaways}

## Conclusão

{conclusion}
`;

// Create the blog directory if it doesn't exist
const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
fs.mkdirSync(blogDir, { recursive: true });

function generatePost() {
  const title = faker.lorem.sentence();
  const description = faker.lorem.paragraph().slice(0, 160);
  const pubDate = faker.date.past().toISOString();
  const updatedDate = faker.date.recent().toISOString();
  const heroImage = faker.image.url();
  const selectedCategories = faker.helpers.arrayElements(CATEGORIES, { min: 1, max: 3 });
  const author = faker.person.fullName();
  
  const content = Array(5).fill(null)
    .map(() => faker.lorem.paragraphs(3))
    .join('\n\n');
  
  const keyTakeaways = Array(3).fill(null)
    .map(() => `- ${faker.lorem.sentence()}`)
    .join('\n');
  
  const conclusion = faker.lorem.paragraphs(2);
  
  return POST_TEMPLATE
    .replace('{title}', title)
    .replace('{description}', description)
    .replace('{pubDate}', pubDate)
    .replace('{updatedDate}', updatedDate)
    .replace('{heroImage}', heroImage)
    .replace('{categories}', JSON.stringify(selectedCategories))
    .replace('{author}', author)
    .replace('{content}', content)
    .replace('{keyTakeaways}', keyTakeaways)
    .replace('{conclusion}', conclusion);
}

// Generate 10 test posts
for (let i = 0; i < 10; i++) {
  const post = generatePost();
  const fileName = `test-post-${i + 1}.md`;
  const filePath = path.join(blogDir, fileName);
  
  fs.writeFileSync(filePath, post);
  console.log(`Generated: ${fileName}`);
}