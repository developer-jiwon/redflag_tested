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

  const assessment = category === "The Narcissist Syndrome" 
    ? getNarcissistAssessment(redFlagCount)
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

