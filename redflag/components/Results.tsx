import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { assessmentCriteria } from "../data/quizData"
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

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("category", category);
    url.searchParams.set("redFlagCount", redFlagCount.toString());
    url.searchParams.set("totalQuestions", totalQuestions.toString());
    setShareUrl(url.toString());
  }, [category, redFlagCount, totalQuestions]);
  
  // Get assessment result based on the score
  const getAssessmentResult = () => {
    const criteria = assessmentCriteria[category as keyof typeof assessmentCriteria]
    if (!criteria.length) return null

    return criteria.find(({ range }) => redFlagCount >= range[0] && redFlagCount <= range[1])
  }

  const assessmentResult = getAssessmentResult()

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopySuccess("URL copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
    });
  }

  const renderFeedback = (category: string, score: number) => {
    const criteria = assessmentCriteria[category];
    const feedback = criteria.find((c: { range: number[] }) => score >= c.range[0] && score <= c.range[1]);
    return (
      <div>
        <h3>{feedback.level}</h3>
        <p>{feedback.description}</p>
        <p>{feedback.detailedFeedback}</p>
      </div>
    );
  };

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
          {assessmentResult && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              {renderFeedback(category, redFlagCount)}
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

