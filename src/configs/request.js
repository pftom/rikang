'use strict';

import queryString from 'query-string';
import _ from 'lodash';

const header = (METHOD, token, multiform) => {
  let auth = {};
  let multiForm = {};

  if (token) {
    auth = {
      'Authorization': 'Token ' + token,
    }
  }

  // supply some form data submit use multipart/form-data
  if (multiform) {
    multiForm = {
      'Content-Type': 'multipart/form-data;',
    }
  }

  let contentType = {};
  if (!multiform) {
    contentType = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  return ({
    method: METHOD,
    headers: {
      ...auth,
      ...multiForm,
      ...contentType,
    }
  })
}

let request = {};

request.get =  ( url, params, token ) => {
  let options = null;
  if (params) {
    console.log('params', params)
    url += '?' + queryString.stringify(params);
  }



  if (token) {
    options = _.extend(header('GET', token));
  }

  console.log('url', url, options);

  return fetch(url, options)
      .then(response => {
        if (response.status !== 200 || !response.ok) {
          throw response.json();
        }
        return response.json();
      })
}

request.post = ( url, body, token, multiform ) => {
  let data = null;
  if (multiform) {
    data = body;
  } else {
    data = JSON.stringify(body);
  }

  console.log('data', data);
  let options = _.extend(header('POST', token, multiform), {
    body: data
  });

  console.log('options', options, url);

  return fetch(url, options)
        .then(response => {

          if (![200, 201].includes(response.status) || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

request.put = ( url, token, body, multiform ) => {
  let data = null;
  if (multiform) {
    data = body;
  } else {
    data = JSON.stringify(body);
  }

  console.log('multiform', multiform, url);

  //multiform support
  let options = _.extend(header('PUT', token, multiform), {
    body: data,
  });

  console.log('options', options);

  return fetch(url, options) 
        .then(response => {
          if (response.status !== 200 || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

export default request;