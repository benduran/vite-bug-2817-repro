import { extendViteBaseConfig } from '../../buildUtils/viteBaseConfig';

const additionalEnvVars = {
  SOMETHING_CUSTOM: {
    CUSTOM_VAR: 'TESTING',
  },
};

export default extendViteBaseConfig({ additionalEnvVars });