const fs = require('fs');
const https = require('https');

const urls = [
  { name: 'home.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzUzNjQ5NTE0ODA5OTRkM2E5ZWY5NTYyNGZjYzhiMjQ2EgsSBxCTzte9ogwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzE5OTA0MzM3OTg0MTg5MDg2Ng&filename=&opi=89354086' },
  { name: 'contact.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzRkZDRhYWVkYWM5NjQ1MGU5ODNhZWE1OTI2OTY4Y2JmEgsSBxCTzte9ogwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzE5OTA0MzM3OTg0MTg5MDg2Ng&filename=&opi=89354086' },
  { name: 'about.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZmMTU3MDM1NTJmNjQ1ZDJiNWNmMGY3ZWFiMzMwNGFlEgsSBxCTzte9ogwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzE5OTA0MzM3OTg0MTg5MDg2Ng&filename=&opi=89354086' },
  { name: 'services.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzFhODI1MTUzMTgyZTRiNTJiYmE5YjRiMTVlZjk2M2U5EgsSBxCTzte9ogwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzE5OTA0MzM3OTg0MTg5MDg2Ng&filename=&opi=89354086' },
  { name: 'gallery.html', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdlNjFmMTM5NWY4OTQ4YjhiY2YyYzM4ODM3MDE0ZmI3EgsSBxCTzte9ogwYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzE5OTA0MzM3OTg0MTg5MDg2Ng&filename=&opi=89354086' }
];

urls.forEach(({name, url}) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(name);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
