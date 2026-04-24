const fs = require('fs');
const files = [
  'src/app/stream/bipc/page.tsx',
  'src/app/stream/mpc/page.tsx',
  'src/app/stream/cec/page.tsx',
  'src/app/stream/hec/page.tsx',
  'src/app/stream/iti/page.tsx',
  'src/app/stream/polycet/page.tsx',
  'src/app/stream/vocational/page.tsx',
  'src/app/stream/[slug]/page.tsx',
];
const line = "export const dynamic = 'force-dynamic';\n\n";
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes('force-dynamic')) {
    c = line + c;
    fs.writeFileSync(f, c);
    console.log('Updated: ' + f);
  } else {
    console.log('Already has dynamic: ' + f);
  }
});
