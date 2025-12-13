import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Resume() {
  const { toast } = useToast();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rinki_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Download",
      description: "Your resume download will begin shortly."
    });
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 max-sm:text-3xl">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my complete resume or view it online
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="bg-[var(--gradient-hero)] p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rinki Yadav - Frontend Developer</h3>
              <p className="text-muted-foreground mb-6">
                Complete professional resume with experience, skills, and achievements
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2 btn-3d" onClick={handleDownload}>
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
                <Button size="lg" variant="outline" className="gap-2 btn-3d" asChild>
                  <a href="#resume-preview">
                    <Eye className="w-5 h-5" />
                    View Online
                  </a>
                </Button>
              </div>
            </div>

            <CardContent id="resume-preview" className="p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                    Professional Summary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate Frontend Developer with 2+ years of experience building responsive web applications 
                    using modern technologies. Proven track record of delivering high-quality projects on time and 
                    collaborating effectively with cross-functional teams. Strong foundation in computer science 
                    principles and commitment to continuous learning.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                    Technical Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend</h4>
                      <p className="text-muted-foreground">HTML5, CSS3, JavaScript (ES6+), React, TypeScript, Tailwind CSS</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend</h4>
                      <p className="text-muted-foreground">Node.js, Express, Python, Flask, REST APIs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Database</h4>
                      <p className="text-muted-foreground">MongoDB, PostgreSQL, MySQL, Firebase</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools</h4>
                      <p className="text-muted-foreground">Git, VS Code, Figma, Docker, Jest, Webpack</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">Frontend Developer Intern</h4>
                          <p className="text-muted-foreground">Tech Solutions Inc.</p>
                        </div>
                        <span className="text-sm text-muted-foreground">Jun 2023 - Aug 2023</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Developed responsive web applications using React and TypeScript</li>
                        <li>Collaborated with design team to implement pixel-perfect UI components</li>
                        <li>Improved application performance by 30% through code optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                    Education
                  </h3>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">Bachelor of Technology in Computer Science</h4>
                      <p className="text-muted-foreground">University of Technology</p>
                      <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2020 - 2024</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary">
                    Certifications
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Meta Frontend Developer Professional Certificate (Coursera)</li>
                    <li>• Google Cloud Certified - Associate Cloud Engineer</li>
                    <li>• AWS Certified Cloud Practitioner</li>
                    <li>• freeCodeCamp - Responsive Web Design & JavaScript Algorithms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
