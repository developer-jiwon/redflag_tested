import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Facebook, Twitter, Link } from 'lucide-react';

interface ResultsProps {
  redFlagCount: number
  totalQuestions: number
  onRestart: () => void
  category: string
}

export default function Results({ redFlagCount, totalQuestions, onRestart, category }: ResultsProps) {
  const percentage = Math.round((redFlagCount / totalQuestions) * 100)
  const [shareUrl, setShareUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const title = `I just completed the ${category} quiz on Red Flag Detect! Check out my results.`;

  const getNarcissistAssessment = (count: number) => {
    if (count <= 2) {
      return {
        level: "🟢 Low Narcissistic Traits",
        description: [
          "This person shows few to no signs of narcissistic behavior.",
          "They likely engage in healthy communication and reciprocate emotional support.",
          "While nobody is perfect, their behavior doesn't indicate significant red flags."
        ],
        color: "text-green-600"
      };
    } else if (count <= 4) {
      return {
        level: "🟡 Mild Narcissistic Traits",
        description: [
          "There are some self-centered tendencies, but it's not extreme.",
          "They may occasionally dismiss feelings or seek attention but can still show empathy.",
          "Could be a personality quirk rather than a true red flag—observe patterns over time."
        ],
        color: "text-yellow-600"
      };
    } else if (count <= 6) {
      return {
        level: "🟠 Moderate Narcissistic Traits",
        description: [
          "There's a noticeable pattern of self-absorption and emotional neglect.",
          "This person may struggle with accountability, dismiss emotions, or seek validation excessively.",
          "Likely difficult to maintain a balanced relationship with them."
        ],
        color: "text-orange-600"
      };
    } else if (count <= 8) {
      return {
        level: "🔴 High Narcissistic Traits (Potential Red Flag)",
        description: [
          "Strong indicators of narcissistic behaviors that could be toxic.",
          "They often lack empathy, shift blame, dodge criticism, and make everything about themselves.",
          "Emotional connection with them might feel draining or one-sided."
        ],
        color: "text-red-600"
      };
    } else {
      return {
        level: "⚠️ Extreme Narcissistic Traits (Dangerous Red Flag)",
        description: [
          "Major red flags. This person exhibits behaviors consistent with Narcissistic Personality Disorder (NPD).",
          "They may manipulate, gaslight, or completely disregard your emotions.",
          "A relationship or interaction with them is likely harmful over time.",
          "Consider distancing yourself or setting strong boundaries."
        ],
        color: "text-red-700"
      };
    }
  };

  const getPuppetMasterAssessment = (count: number) => {
    if (count <= 2) {
      return {
        level: "🟢 Low Manipulative Traits",
        description: [
          "This person shows little to no signs of manipulative behavior.",
          "They may still have moments of miscommunication, but they don't actively twist narratives or guilt-trip others.",
          "Healthy relationship potential! Minor issues can likely be resolved through honest communication."
        ],
        color: "text-green-600"
      };
    } else if (count <= 4) {
      return {
        level: "🟡 Mild Manipulative Traits",
        description: [
          "There are some manipulative tendencies, but they may not be intentional.",
          "They might use guilt, play the victim, or avoid responsibility occasionally.",
          "This could stem from insecurity or learned behaviors, rather than deliberate control.",
          "Pay attention to patterns—occasional manipulation can become a bigger problem over time."
        ],
        color: "text-yellow-600"
      };
    } else if (count <= 6) {
      return {
        level: "🟠 Moderate Manipulative Traits",
        description: [
          "Clear signs of repeated manipulative behaviors.",
          "This person twists words, avoids accountability, and guilt-trips regularly.",
          "Conversations likely feel one-sided or emotionally draining.",
          "Proceed with caution—you may need strong boundaries to maintain emotional well-being."
        ],
        color: "text-orange-600"
      };
    } else if (count <= 8) {
      return {
        level: "🔴 High Manipulative Traits (Red Flag Alert)",
        description: [
          "This person routinely uses tactics like gaslighting, blame-shifting, and emotional control.",
          "They likely dismiss your emotions, distort reality, and make you feel responsible for their well-being.",
          "Hard to build a healthy connection—their behavior can cause serious emotional exhaustion.",
          "Consider reevaluating the relationship and setting clear boundaries."
        ],
        color: "text-red-600"
      };
    } else {
      return {
        level: "⚠️ Extreme Manipulative Traits (Toxic/Dangerous Red Flag!)",
        description: [
          "Major warning signs! This person operates entirely through manipulation and control.",
          "Expect gaslighting, guilt-tripping, emotional blackmail, and power imbalances in interactions.",
          "High likelihood of emotional or psychological abuse—they don't respect boundaries or personal autonomy.",
          "Protect yourself. Distance may be the best course of action."
        ],
        color: "text-red-700"
      };
    }
  };

  const getControlFreakAssessment = (count: number) => {
    if (count <= 2) {
      return {
        level: "🟢 Low Controlling Traits",
        description: [
          "This person shows little to no signs of controlling behavior.",
          "They may express occasional concern or curiosity, but they respect boundaries and personal autonomy.",
          "Healthy relationship dynamics! Some behaviors may stem from care, not control."
        ],
        color: "text-green-600"
      };
    } else if (count <= 4) {
      return {
        level: "🟡 Mild Controlling Traits",
        description: [
          "Some tendencies to monitor, question, or restrict behavior appear, but they may not be extreme.",
          "Could be rooted in insecurity rather than intentional control.",
          "Open communication could help—but be cautious if these behaviors escalate over time."
        ],
        color: "text-yellow-600"
      };
    } else if (count <= 6) {
      return {
        level: "🟠 Moderate Controlling Traits",
        description: [
          "A pattern of possessiveness and dominance is emerging.",
          "This person likely dictates aspects of your life, invades privacy, or controls your time and choices.",
          "Maintaining independence around them might feel difficult or exhausting.",
          "Serious boundary-setting is needed—otherwise, the control may escalate."
        ],
        color: "text-orange-600"
      };
    } else if (count <= 8) {
      return {
        level: "🔴 High Controlling Traits (Red Flag Alert!)",
        description: [
          "This person consistently limits freedom, violates privacy, and expects control over decisions.",
          "Expect guilt-tripping, monitoring, and restriction of personal relationships.",
          "High risk of emotional control or manipulation—you may feel trapped in their rules.",
          "Consider reevaluating this relationship and enforcing strong boundaries."
        ],
        color: "text-red-600"
      };
    } else {
      return {
        level: "⚠️ Extreme Controlling Traits (Toxic/Dangerous Red Flag!)",
        description: [
          "🚨 Major warning signs of possessive and possibly abusive behavior.",
          "Expect isolation, control over finances, extreme jealousy, and no respect for personal autonomy.",
          "Serious risk of emotional, psychological, or financial abuse.",
          "Immediate action is advised—consider distancing or seeking support."
        ],
        color: "text-red-700"
      };
    }
  };

  const getShadyLiarAssessment = (count: number) => {
    if (count <= 2) {
      return {
        level: "🟢 Low Dishonest Traits",
        description: [
          "This person shows minimal to no signs of deception.",
          "They might value privacy but don't display a pattern of secrecy or lies.",
          "Likely just independent or private, not necessarily dishonest."
        ],
        color: "text-green-600"
      };
    } else if (count <= 4) {
      return {
        level: "🟡 Mild Dishonest Traits",
        description: [
          "Some secrecy or defensiveness exists, but it may not be intentional deception.",
          "Could be habitual privacy, poor communication, or insecurity rather than outright lying.",
          "Monitor patterns—inconsistent stories or dodging questions could indicate deeper issues."
        ],
        color: "text-yellow-600"
      };
    } else if (count <= 6) {
      return {
        level: "🟠 Moderate Dishonest Traits",
        description: [
          "A clear pattern of dishonesty or secrecy is emerging.",
          "They might hide things, twist facts, or avoid direct answers.",
          "Trust issues are likely in this relationship—be cautious."
        ],
        color: "text-orange-600"
      };
    } else if (count <= 8) {
      return {
        level: "🔴 High Dishonest Traits (Red Flag Alert!)",
        description: [
          "🚩 This person regularly lies, avoids accountability, and changes their stories.",
          "Blame-shifting, defensiveness, and secrecy are their go-to responses.",
          "High risk of manipulation or betrayal—trust is being actively broken.",
          "Consider reevaluating this relationship."
        ],
        color: "text-red-600"
      };
    } else {
      return {
        level: "⚠️ Extreme Dishonest Traits (Toxic/Dangerous Red Flag!)",
        description: [
          "🚨 Major warning signs of serious dishonesty and deception.",
          "This person lies habitually, gaslights, and refuses accountability.",
          "Expect constant secrecy, emotional manipulation, and lack of transparency.",
          "Trust is completely compromised—consider distancing or cutting ties."
        ],
        color: "text-red-700"
      };
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("category", category);
    url.searchParams.set("redFlagCount", redFlagCount.toString());
    url.searchParams.set("totalQuestions", totalQuestions.toString());
    setShareUrl(url.toString());
  }, [category, redFlagCount, totalQuestions]);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess("URL copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  const assessment = category === "The Puppet Master" 
    ? getPuppetMasterAssessment(redFlagCount)
    : category === "The Narcissist Syndrome"
    ? getNarcissistAssessment(redFlagCount)
    : category === "The Control Freak"
    ? getControlFreakAssessment(redFlagCount)
    : category === "The Shady Liar"
    ? getShadyLiarAssessment(redFlagCount)
    : null;

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-[#800200]">Your Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-2xl font-bold mb-2">{percentage}% Red Flags</p>
          <p className="text-lg mb-4">
            You identified {redFlagCount} red flags out of {totalQuestions} situations
          </p>
          
          {assessment && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className={`text-xl font-bold mb-3 ${assessment.color}`}>
                {assessment.level}
              </p>
              <div className="space-y-2 text-left">
                {assessment.description.map((desc, index) => (
                  <p key={index} className="text-gray-700">
                    • {desc}
                  </p>
                ))}
              </div>
            </div>
          )}

          {!assessment && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Remember: This assessment is meant to raise awareness about potential relationship concerns.</p>
              <p>If you have serious concerns, consider speaking with a relationship counselor or trusted advisor.</p>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <FacebookShareButton url={shareUrl} hashtag="#RedFlagDetect">
              <Button className="bg-[#800200] text-white hover:bg-black p-2 rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <Button className="bg-[#800200] text-white hover:bg-black p-2 rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
            </TwitterShareButton>
            <Button onClick={handleCopyUrl} className="bg-[#800200] text-white hover:bg-black p-2 rounded-full">
              <Link className="w-5 h-5" />
            </Button>
          </div>
          {copySuccess && <p className="text-green-600 mt-2">{copySuccess}</p>}
        </div>
        <Button onClick={onRestart} className="w-full">
          Take Another Assessment
        </Button>
      </CardContent>
    </Card>
  )
}

