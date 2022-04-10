import cookie from 'js-cookie';
import Router from 'next/router';

export function handleLogin(token) {
    cookie.set('hs-token', token);
    Router.push('/account');
}
