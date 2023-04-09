module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the container',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/containers/{{name}}/index.tsx',
        templateFile: 'plop-templates/Container/container.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{name}}/reducer.ts',
        templateFile: 'plop-templates/Container/reducers.js.hbs',
      },

      {
        type: 'add',
        path: 'src/containers/{{name}}/constants.ts',
        templateFile: 'plop-templates/Container/constants.js.hbs',
      },

      {
        type: 'add',
        path: 'src/containers/{{name}}/thunks.ts',
        templateFile: 'plop-templates/Container/thunks.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{name}}/actions.ts',
        templateFile: 'plop-templates/Container/actions.js.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{name}}/styles.scss',
        templateFile: 'plop-templates/Container/styles.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/containers/{{name}}/types.d.ts',
        templateFile: 'plop-templates/Container/types.ts.hbs',
      },
    ],
  });
};
