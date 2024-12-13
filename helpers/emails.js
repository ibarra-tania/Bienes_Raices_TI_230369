import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <header style="font-family: bold; text-align: center; line-height: 0.5;">
        <h2>Bienes Raices</h2>
        <h3>Confirmación de correo</h3>
      </header>
      <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px;">
        <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${nombre}</span>!</h2>
        <div style="padding: 35px; border: dashed #50c878; border-radius: 30px;">
          <p style="font-size: 18px;">
            ¡Gracias por registrarte en <strong>BienesRaices.com</strong>! Para completar el proceso de confirmación de tu cuenta, necesitamos que confirmes tu correo electrónico.
          </p>
          <div style="text-align: center; background: #F1FBFA; border: 1px solid #000000; padding: 15px;">
            <p style="font-size: 20px;">
              Haz clic en el botón de abajo para confirmar tu cuenta:
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}"
                 style="background-color: #50c878; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                 Confirmar Cuenta
              </a>
            </div>
          </div>
          <p style="font-size: 18px; color: #666;">
            Si no reconoces esta solicitud, puedes ignorar este mensaje.
          </p>
        </div>
      </div>
      <footer style="text-align: center;">
        @Todos los derechos reservados de BienesRaices.com
      </footer>
    `
  });
};

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Restablece tu password en BienesRaices.com',
    text: 'Restablece tu password en BienesRaices.com',
    html: `
      <header style="font-family: bold; text-align: center; line-height: 0.5;">
        <h2>Bienes Raices</h2>
        <h3>Recuperación de contraseña</h3>
      </header>
      <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px;">
        <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${nombre}</span>!</h2>
        <div style="padding: 35px; border: dashed #50c878; border-radius: 30px;">
          <p style="font-size: 18px;">
            Hemos recibido una solicitud para restablecer la contraseña de tu cuenta en <strong>BienesRaices.com</strong>.
          </p>
          <div style="text-align: center; background: #F1FBFA; border: 1px solid #000000; padding: 15px;">
            <p style="font-size: 20px;">
              Haz clic en el botón de abajo para restablecer tu contraseña:
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}"
                 style="background-color: #50c878; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                 Restablecer Contraseña
              </a>
            </div>
          </div>
          <p style="font-size: 18px; color: #666;">
            Si no solicitaste este cambio, puedes ignorar este mensaje.
          </p>
        </div>
      </div>
      <footer style="text-align: center;">
        @Todos los derechos reservados de BienesRaices.com
      </footer>
    `
  });
};

export { emailRegistro, emailOlvidePassword };
