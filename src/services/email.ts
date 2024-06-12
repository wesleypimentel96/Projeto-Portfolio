import { formSubmitApi } from '@/http';

// Definina o email que vai receber as mensagens
const DEFAULT_EMAIL = 'SEU_EMAIL';

export const emailService = {
  sendEmail: async (
    name: string,
    message: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      const { data } = await formSubmitApi.post(`/ajax/${DEFAULT_EMAIL}`, {
        name,
        message,
      });

      return {
        success: data.success,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Erro ao enviar o e-mail. Tente novamente.',
      };
    }
  },
};
