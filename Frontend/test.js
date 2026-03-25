fetch('http://case-tech.com').then(r=>r.text()).then(t=>console.log(t.match(/<img[^>]+src=[\"']([^\"']+)[\"']/g)))
