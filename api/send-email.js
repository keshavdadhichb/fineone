const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kessssssssssssjjjj@gmail.com',
            pass: 'uynw yhdj bfmu gonj'
        }
    });

    const mailOptions = {
        from: 'kessssssssssssjjjj@gmail.com',
        to: 'khanak.shah2023@vitstudent.ac.in',
        subject: 'Thank you for accepting the invitation!',
        html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, #ffeef8, #f0e6ff); border-radius: 20px;">
                <h2 style="color: #e75480; text-align: center;">💕 Thank you for accepting the invitation! 💕</h2>
                
                <p style="color: #333; font-size: 16px; line-height: 1.8;">Dear Kuchu,</p>
                
                <p style="color: #333; font-size: 16px; line-height: 1.8;">
                    I am so delighted that you, the prettiest girl in the world accepted my invitation.
                </p>
                
                <p style="color: #333; font-size: 16px; line-height: 1.8;">
                    It is a moment of delight and extreme happiness that the princess of vadodra has accepted to go out with the prince of Rajasthan.
                </p>
                
                <p style="color: #333; font-size: 16px; line-height: 1.8;">
                    Thy shall be made sure that your acceptance is met with at most honour and respect and you shall have the best valentines day of your life.
                </p>
                
                <p style="color: #9b59b6; font-size: 18px; margin-top: 30px;">
                    Love,<br>
                    <strong>Keshu Bunnysmile Dadhich ;)</strong>
                </p>
                
                <div style="text-align: center; margin-top: 30px; font-size: 30px;">
                    💕 💖 💗 💓 💝
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
};
