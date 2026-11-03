const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const htmlPath = path.join(__dirname, '..', 'baitap8thachthuc.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

assert.ok(scriptMatch, 'The HTML page should contain its JavaScript');
const pageScript = scriptMatch[1];

function greetingForHour(hour) {
  const welcomeMessage = {};
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
      return id === 'welcome-message' ? welcomeMessage : element;
    },
    querySelector(selector) {
      return selector === '.header-container' ? headerContainer : element;
    },
    querySelectorAll() {
      return [];
    },
  };
  class MockDate {
    getHours() {
      return hour;
    }
  }

  vm.runInNewContext(pageScript, {
    Date: MockDate,
    document,
    window: { scrollTo() {} },
  });

  return welcomeMessage.innerHTML;
}

test('shows the correct greeting at every time-period boundary', () => {
  const cases = [
    [0, 'Chúc bạn một đêm an lành!'],
    [4, 'Chúc bạn một đêm an lành!'],
    [5, 'Chào buổi sáng!'],
    [11, 'Chào buổi sáng!'],
    [12, 'Chào buổi chiều!'],
    [17, 'Chào buổi chiều!'],
    [18, 'Chào buổi tối!'],
    [21, 'Chào buổi tối!'],
    [22, 'Chúc bạn một đêm an lành!'],
    [23, 'Chúc bạn một đêm an lành!'],
  ];

  for (const [hour, greeting] of cases) {
    assert.equal(greetingForHour(hour), `<strong>${greeting}</strong>`, `hour ${hour}`);
  }
});
