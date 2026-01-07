import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Resume() {
  const { toast } = useToast();

  const handleDownload = () => {
    const doc = new jsPDF();
    
    // Set font
    doc.setFont('helvetica');
    
    // Header - Name
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Rinki Rajbahadur Yadav', 105, 20, { align: 'center' });
    
    // Contact Information
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Email Id: rv192006@gmail.com', 20, 30);
    doc.text('Contact Number: 9172630524', 20, 36);
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('LinkedIn: https://www.linkedin.com/in/rinki-yadav-b52300288', 20, 42, { url: 'https://www.linkedin.com/in/rinki-yadav-b52300288' });
    doc.setTextColor(0, 0, 0);
    
    // Education Qualifications
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Education Qualifications:', 20, 52);
    
    // Education Table
    (doc as any).autoTable({
      startY: 56,
      head: [['College Name', 'Course', 'Year of Passing', 'Percentage']],
      body: [
        ['Shri Shankar Narayan\nCollege Of Arts &\nCommerce', 'Bachelor of Computer\nScience', 'Currently\nPursuing', '82% (Average\nof Sem 1 to\nSem 4)'],
        ['Thakur Vidya Mandir High\nSchool & Jr. College', 'Higher Secondary School\nCertificate', '2023', '58.33%'],
        ['JijaMata Vidya Mandir\nHigh School', 'Secondary School\nCertificate', '2021', '69.40%']
      ],
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 3 },
      headStyles: { fillColor: [6, 182, 212], textColor: 255 }
    });
    
    // Additional Certifications
    let yPos = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Additional Certifications:', 20, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
    doc.text('• Currently pursuing Employability Skills and Placements Training offered by TNS India', 20, yPos);
    yPos += 5;
    doc.text('  Foundation.', 20, yPos);
    yPos += 6;
    doc.text('• Certification in Cyber Security from Udemy.', 20, yPos);
    yPos += 6;
    doc.text('• Currently pursuing certification in Web Development.', 20, yPos);
    
    // Academic and Extracurricular Achievements
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Academic and Extracurricular Achievements:', 20, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
    doc.text('• Volunteer at Udaan Event.', 20, yPos);
    
    // Research Project
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Research Project:', 20, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
    doc.text('• Created a website on Smart Career Guidance Platform.', 20, yPos);
    
    // Personal Details
    yPos += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Personal Details:', 20, yPos);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    yPos += 6;
    doc.text('• Address: Nallasopara East, Palghar-401209', 20, yPos);
    yPos += 6;
    doc.text('• Date of Birth: 19th June, 2006', 20, yPos);
    yPos += 6;
    doc.text('• Hobbies: Sketching, Music and Crafting.', 20, yPos);
    yPos += 6;
    doc.text('• Languages Known: English, Hindi and Marathi.', 20, yPos);
    
    // Save the PDF
    doc.save('Rinki_Yadav_Resume.pdf');
    
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded as PDF successfully."
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
                  Download PDF
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10" asChild>
                  <a href="#resume-preview">
                    <Eye className="w-5 h-5" />
                    View Below
                  </a>
                </Button>
              </div>
            </div>

            <CardContent id="resume-preview" className="p-8">
              {/* Resume Content */}
              <div className="space-y-8 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center pb-6 border-b-2 border-primary/20">
                  <h1 className="text-3xl font-bold mb-4">Rinki Rajbahadur Yadav</h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href="mailto:rv192006@gmail.com" className="hover:text-primary transition-colors">
                        rv192006@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>9172630524</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-primary" />
                      <a 
                        href="https://www.linkedin.com/in/rinki-yadav-b52300288" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>

                {/* Education Qualifications */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                    <span className="text-primary">📚</span> Education Qualifications
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/10">
                          <th className="border border-primary/20 p-3 text-left">College Name</th>
                          <th className="border border-primary/20 p-3 text-left">Course</th>
                          <th className="border border-primary/20 p-3 text-left">Year of Passing</th>
                          <th className="border border-primary/20 p-3 text-left">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="border border-primary/20 p-3">Shri Shankar Narayan College Of Arts & Commerce</td>
                          <td className="border border-primary/20 p-3">Bachelor of Computer Science</td>
                          <td className="border border-primary/20 p-3">Currently Pursuing</td>
                          <td className="border border-primary/20 p-3">82% (Average of Sem 1 to Sem 4)</td>
                        </tr>
                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="border border-primary/20 p-3">Thakur Vidya Mandir High School & Jr. College</td>
                          <td className="border border-primary/20 p-3">Higher Secondary School Certificate</td>
                          <td className="border border-primary/20 p-3">2023</td>
                          <td className="border border-primary/20 p-3">58.33%</td>
                        </tr>
                        <tr className="hover:bg-primary/5 transition-colors">
                          <td className="border border-primary/20 p-3">JijaMata Vidya Mandir High School</td>
                          <td className="border border-primary/20 p-3">Secondary School Certificate</td>
                          <td className="border border-primary/20 p-3">2021</td>
                          <td className="border border-primary/20 p-3">69.40%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Certifications */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                    <span className="text-primary">🎓</span> Additional Certifications
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Currently pursuing Employability Skills and Placements Training offered by TNS India Foundation.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Certification in Cyber Security from Udemy.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Currently pursuing certification in Web Development.</span>
                    </li>
                  </ul>
                </div>

                {/* Academic and Extracurricular Achievements */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                    <span className="text-primary">🏆</span> Academic and Extracurricular Achievements
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Volunteer at Udaan Event.</span>
                    </li>
                  </ul>
                </div>

                {/* Research Project */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                    <span className="text-primary">🔬</span> Research Project
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Created a website on Smart Career Guidance Platform.</span>
                    </li>
                  </ul>
                </div>

                {/* Personal Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                    <span className="text-primary">👤</span> Personal Details
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Address:</strong> Nallasopara East, Palghar-401209</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Date of Birth:</strong> 19th June, 2006</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Hobbies:</strong> Sketching, Music and Crafting.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Languages Known:</strong> English, Hindi and Marathi.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  size="lg" 
                  className="gap-2 btn-3d" 
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download as PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
