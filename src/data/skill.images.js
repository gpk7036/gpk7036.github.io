import bootstrap from './images/bootstrap.svg';
import css from './images/css.svg';
import git from './images/git.svg';
import html from './images/html.svg';
import java from './images/java.svg';
import javascript from './images/javascript.svg';
import materialui from './images/materialui.svg';
import mongoDB from './images/mongoDB.svg';
import mysql from './images/mysql.svg';
import react from './images/react.svg';
import nodejs from './images/nodejs.svg';
import express from './images/expressjs.svg';
import tailwind from './images/tailwind.svg'


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'nodejs':
      return nodejs;
    case 'express':
        return express;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'java':
      return java;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    default:
      break;
  }
}
