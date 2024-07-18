import { Box, Typography } from "@mui/material";
import { FAQ } from "./FAQ";

export function LearningContent() {
  return (
    <Box padding={2}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Oops! You Just Fell for a Phishing Test
      </Typography>
      <Typography>
        Thank you for participating in this exercise. The page you just
        interacted with was part of a controlled phishing simulation designed to
        help you recognize phishing attempts and improve your cybersecurity
        awareness.
      </Typography>
      {faqs.map((faq) => (
        <FAQ question={faq.question} answer={faq.answer} />
      ))}
    </Box>
  );
}

const faqs = [
  {
    question: "What Happened?",
    answer: (
      <Typography>
        You were presented with a fake login page that mimicked a legitimate
        service. When you entered your credentials, the system logged the
        attempt but did not store any sensitive information.
      </Typography>
    ),
  },
  {
    question: "How to Recognize Phishing Attempts",
    answer: (
      <Box>
        <Typography>
          Phishing attacks are attempts by cybercriminals to trick you into
          providing sensitive information such as usernames, passwords, or
          credit card details by pretending to be a trustworthy entity. Here are
          some tips to help you identify and avoid phishing attempts:
          <ul>
            <li>
              <strong>Check the Sender's Email Address:</strong> Ensure that the
              sender's email address matches the official domain of the
              organization. Phishing emails often use addresses that look
              similar but have slight variations.
            </li>
            <li>
              <strong>Look for Suspicious Links:</strong> Hover over links to
              see the actual URL before clicking. Phishing emails often contain
              links that lead to fake websites designed to steal your
              information.
            </li>
            <li>
              <strong>Verify the Website's URL:</strong> Before entering any
              credentials, check the website's URL. Ensure it uses HTTPS and
              that the domain is correct.
            </li>
            <li>
              <strong>Beware of Urgent Requests:</strong> Phishing emails often
              create a sense of urgency to prompt immediate action. Be cautious
              of emails that pressure you to act quickly.
            </li>
            <li>
              <strong>Look for Spelling and Grammar Errors:</strong> Many
              phishing emails contain spelling and grammar mistakes.
              Professional organizations typically proofread their
              communications.
            </li>
            <li>
              <strong>Use Two-Factor Authentication (2FA):</strong> Enable 2FA
              on your accounts to add an extra layer of security. Even if your
              password is compromised, 2FA can prevent unauthorized access.
            </li>
            <li>
              <strong>Be Skeptical of Unsolicited Emails:</strong> If you
              receive an unexpected email asking for personal information,
              verify its legitimacy by contacting the organization directly
              using a known contact method.
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    question: "What to Do If You Suspect a Phishing Attempt",
    answer: (
      <Typography>
        If you receive a suspicious email or encounter a questionable website,
        do not interact with it. Report the phishing attempt to your IT
        department or use your email provider's reporting tools. Always stay
        vigilant and think twice before providing sensitive information online.
      </Typography>
    ),
  },
];
