import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our engagements"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver superior results that exceed expectations"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work collaboratively with clients to achieve shared goals"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We bring creative solutions to complex challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tilaabo Consulting</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Empowering organizations across East Africa through strategic consulting and capacity building
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-highlight mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Tilaabo Consulting was founded with a vision to drive transformative change across East Africa. 
                Our name "Tilaabo" reflects our commitment to transformation and positive impact in the communities we serve.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                With deep roots in the region and extensive experience in governance, policy development, and capacity building, 
                we understand the unique challenges and opportunities that organizations face in East Africa. Our team combines 
                international best practices with local insights to deliver solutions that are both effective and sustainable.
              </p>
              
              <p className="text-lg leading-relaxed">
                From government institutions to international organizations, from NGOs to private sector entities, 
                we have helped numerous clients achieve their strategic objectives while building lasting capacity for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/10 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg leading-relaxed">
                  To be the leading consulting firm in East Africa, recognized for driving sustainable transformation 
                  and building resilient institutions that serve their communities effectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/10 hover:border-accent/20 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-accent">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg leading-relaxed">
                  To empower organizations through strategic consulting, governance reform, and capacity building, 
                  enabling them to achieve their goals while creating positive impact in their communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-highlight mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;