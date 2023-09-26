//Implementing cron server with email
import cron from "node-cron";
import express from "express";
import nodemailer from "nodemailer";

const app = express();

// Calling sendEmail() function every 1 minute
cron.schedule("*/1 * * * *", function() {
sendMail();
});

// Send Mail function using Nodemailer
function sendMail() {
	let mailTransporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
		user: "manishaac2002@gmail.com",
		pass: "fwzvbsmanexmbgwt" //setting a password in the (google) gmail account setting
		}
	});
	
	// Setting credentials
	let mailDetails = {
		from: "manishaac2002@gmail.com",
		to: "manisha.jsdev@gmail.com",
		subject: "Test mail using Cron job",
		text: "Node.js cron job email"
		+ " testing for GeeksforGeeks"
	};
	
	
	// Sending Email
	mailTransporter.sendMail(mailDetails,
					function(err, data) {
		if (err) {
			console.log("Error Occurs", err);
		} else {
			console.log("Email sent successfully");
		}
	});
}

//port
app.listen(3000);
