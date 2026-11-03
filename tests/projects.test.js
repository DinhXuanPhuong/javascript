const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const htmlPath = path.join(__dirname, '..', 'baitap8thachthuc.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

assert.ok(scriptMatch, 'The HTML page should contain its JavaScript');

test('renders each project from the projects data array', () => {
  const projectsContainer = { innerHTML: '' };
  const welcomeMessage = { innerHTML: '' };
  const element = {
    addEventListener() {},
    scrollIntoView() {},
    setAttribute() {},
  };
  const headerContainer = {
    classList: {
      toggle() {
        return false;
      },
      remove() {},
    },
  };
  const document = {
    getElementById(id) {
      if (id === 'projects-list') {
        return projectsContainer;
      }
      return id === 'welcome-message' ? welcomeMessage : element;
    },
    querySelector(selector) {
      return selector === '.header-container' ? headerContainer : element;
    },
    querySelectorAll() {
      return [];
    },
  };

  vm.runInNewContext(scriptMatch[1], {
    Date,
    document,
    window: { scrollTo() {} },
  });

  assert.equal((projectsContainer.innerHTML.match(/class="project-card"/g) || []).length, 2);
  assert.match(projectsContainer.innerHTML, /Trang Web Thương Mại Điện Tử Mini/);
  assert.match(projectsContainer.innerHTML, /Ứng Dụng Quản Lý Công Việc/);
  assert.match(projectsContainer.innerHTML, /Liên kết demo chưa được cập nhật/);
});
