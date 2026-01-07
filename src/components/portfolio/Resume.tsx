import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Resume() {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rinki_Yadav_Resume.png';
    link.download = 'Rinki_Yadav_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully."
    });
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume or view it online
            </p>
          </div>

          <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300">
            <div className="bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 text-center border-b border-primary/20">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm border-2 border-primary/30">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rinki Rajbahadur Yadav</h3>
              <p className="text-muted-foreground mb-2">Fullstack Developer</p>
              <p className="text-sm text-muted-foreground mb-6">
                Bachelor of Computer Science | Currently Pursuing
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2 btn-3d" onClick={handleDownload}>
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10" asChild>
                  <a href="#resume-preview">
                    <Eye className="w-5 h-5" />
                    View Below
                  </a>
                </Button>
              </div>
            </div>

            <CardContent id="resume-preview" className="p-8 bg-muted/30">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/Rinki_Yadav_Resume.png" 
                  alt="Rinki Yadav Resume"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="gap-2 btn-3d" 
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download Full Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
