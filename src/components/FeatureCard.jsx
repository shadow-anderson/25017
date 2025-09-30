import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const FeatureCard = ({ icon: Icon, title, description, iconColor = "text-blue-600", bgColor = "bg-blue-100" }) => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-xl">
      <CardHeader className="text-center pb-4">
        <div className={`mx-auto w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <CardTitle className="text-xl font-semibold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-slate-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;