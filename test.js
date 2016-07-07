import test from 'ava';
import nuname from './';

test('nuname delivers nodename:', t => {
    var hostname = nuname('n');
    console.log('nuname(\'n\') = hostname =', hostname);
    t.true(hostname.length > 0);
});

test('nuname delivers system release:', t => {
    var release = nuname('r');
    console.log('nuname(\'r\') = release =', release);
    t.true(release.length > 0);
});

test('nuname delivers system name:', t => {
    var systemName = nuname('s');
    console.log('nuname(\'s\') = systemName =', systemName);
    t.true(systemName.length > 0);
});
