import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';
import { 
  MessageSquare, 
  Users, 
  Plus, 
  Calendar,
  User,
  Send,
  Heart,
  MessageCircle,
  Share,
  Clock
} from 'lucide-react';

const Networking = () => {
  // Dummy posts data
  const initialPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        batch: "2018",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d7c6?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-29T14:30:00Z",
      content: "Just wanted to share some exciting news! I recently got promoted to Senior Software Engineer at TechCorp. The journey wasn't easy, but the support from this amazing alumni network made all the difference. Looking forward to giving back and mentoring new graduates. Feel free to reach out if you're looking for advice on career growth in tech! 🚀",
      likes: 24,
      comments: 8,
      timestamp: "1 day ago"
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        title: "Investment Director",
        company: "Venture Capital Partners",
        batch: "2015",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-28T10:15:00Z",
      content: "Hosting a virtual panel discussion on 'Breaking into Venture Capital' next Friday at 6 PM EST. We'll have partners from top VC firms sharing insights on what they look for in candidates and how to transition from traditional finance roles. Register link in my bio. This is specifically for our alumni network, so spots are limited!",
      likes: 18,
      comments: 12,
      timestamp: "2 days ago"
    },
    {
      id: 3,
      user: {
        name: "Emily Rodriguez",
        title: "UX Design Manager",
        company: "Design Systems Co.",
        batch: "2019",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-27T16:45:00Z",
      content: "Quick question for the community - has anyone made the transition from individual contributor to management in the design field? I'm considering a team lead role but feeling nervous about moving away from hands-on design work. Would love to hear about your experiences and any advice you might have. Thanks in advance! 🎨",
      likes: 31,
      comments: 15,
      timestamp: "3 days ago"
    },
    {
      id: 4,
      user: {
        name: "David Kim",
        title: "Startup Founder",
        company: "TechStartup Solutions",
        batch: "2016",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-26T09:20:00Z",
      content: "Exciting update from the entrepreneurship front! Our startup just closed our Series A funding round - $5M led by Sequoia Capital. It's been an incredible 2-year journey from our dorm room idea to here. Huge thanks to all the alumni who provided mentorship, made introductions, and believed in our vision. The network effect is real! 💪",
      likes: 47,
      comments: 22,
      timestamp: "4 days ago"
    },
    {
      id: 5,
      user: {
        name: "Lisa Wang",
        title: "Marketing Director",
        company: "Growth Marketing Agency",
        batch: "2017",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-25T13:10:00Z",
      content: "PSA for anyone in marketing or looking to break into the field: I'm hiring for 2 positions at my agency - a Growth Marketing Specialist and a Content Marketing Manager. Both roles are remote-friendly and we're specifically looking to add more diversity to our team. Alumni get priority in the application process. DM me for details!",
      likes: 33,
      comments: 18,
      timestamp: "5 days ago"
    },
    {
      id: 6,
      user: {
        name: "Dr. James Wilson",
        title: "Data Scientist",
        company: "AI Research Labs",
        batch: "2014",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-24T11:30:00Z",
      content: "For all the data science enthusiasts out there - I just published a research paper on 'Ethical AI in Healthcare Applications' that got accepted to the International Conference on Machine Learning. Happy to share the pre-print with anyone interested. Also planning to host a workshop on transitioning from academia to industry data science roles. Let me know if there's interest!",
      likes: 28,
      comments: 10,
      timestamp: "6 days ago"
    },
    {
      id: 7,
      user: {
        name: "Jennifer Lee",
        title: "Product Manager",
        company: "Apple Inc.",
        batch: "2020",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-23T15:45:00Z",
      content: "Reflection time: It's been exactly one year since I joined Apple as a PM, and what a year it's been! From feeling completely overwhelmed in my first few months to now leading a team of 8 engineers on a major iOS feature. The imposter syndrome was real, but persistence and continuous learning paid off. To all recent grads - believe in yourselves! 🍎",
      likes: 52,
      comments: 25,
      timestamp: "1 week ago"
    },
    {
      id: 8,
      user: {
        name: "Robert Taylor",
        title: "Healthcare Administrator",
        company: "Metropolitan Hospital",
        batch: "2013",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
      },
      date: "2025-09-22T08:15:00Z",
      content: "Healthcare professionals and those interested in the field - I'm organizing a healthcare innovation summit for alumni. We'll be discussing the future of digital health, telemedicine, and healthcare policy. Looking for speakers and sponsors. This is a great networking opportunity for anyone in or transitioning to healthcare. Please reach out if interested!",
      likes: 19,
      comments: 7,
      timestamp: "1 week ago"
    }
  ];

  // State management
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitPost = (e) => {
    e.preventDefault();
    
    if (!newPostContent.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Create new post object
    const newPost = {
      id: posts.length + 1,
      user: {
        name: "Current User", // In a real app, this would come from authentication
        title: "Alumni Member",
        company: "Your Company",
        batch: "2021",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
      },
      date: new Date().toISOString(),
      content: newPostContent.trim(),
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    };

    // Log the new post to console
    console.log('New post submitted:', newPost);

    // Add to posts list
    setPosts([newPost, ...posts]);

    // Clear form
    setNewPostContent('');
    setIsSubmitting(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const PostCard = ({ post }) => (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-slate-800">
                  {post.user.name}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {post.user.title} at {post.user.company} • Class of {post.user.batch}
                </CardDescription>
              </div>
              <div className="flex items-center text-sm text-slate-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
        
        {/* Engagement buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-slate-500 hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-slate-500 hover:text-green-500 transition-colors">
              <Share className="h-5 w-5" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
          <div className="text-xs text-slate-400">
            {formatDate(post.date)}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Alumni Networking</h1>
          <p className="text-slate-600">Connect, share, and discuss with fellow alumni</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{posts.length}</p>
                  <p className="text-slate-600">Total Posts</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">156</p>
                  <p className="text-slate-600">Active Members</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">24</p>
                  <p className="text-slate-600">This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Post Form */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5 text-blue-600" />
              <span>Share with the Community</span>
            </CardTitle>
            <CardDescription>
              What's on your mind? Share updates, ask questions, or start a discussion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <Textarea
                placeholder="Write your post here... Share career updates, ask for advice, announce opportunities, or just connect with fellow alumni!"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="min-h-[120px] resize-none"
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  {newPostContent.length}/1000 characters
                </div>
                <Button 
                  type="submit" 
                  disabled={!newPostContent.trim() || isSubmitting}
                  className="min-w-[100px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Posting...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Post
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">Recent Discussions</h2>
            <div className="text-sm text-slate-500">
              {posts.length} post{posts.length !== 1 ? 's' : ''}
            </div>
          </div>
          
          {posts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <MessageSquare className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-2">No Posts Yet</h3>
                <p className="text-slate-600">Be the first to start a discussion!</p>
              </CardContent>
            </Card>
          ) : (
            posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>

        {/* Community Guidelines */}
        <Card className="mt-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Community Guidelines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">✅ Encouraged</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Career updates and achievements</li>
                  <li>• Job opportunities and referrals</li>
                  <li>• Industry insights and advice</li>
                  <li>• Professional networking requests</li>
                  <li>• Educational content and resources</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-2">❌ Please Avoid</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Spam or promotional content</li>
                  <li>• Political or controversial topics</li>
                  <li>• Personal attacks or harassment</li>
                  <li>• Confidential information sharing</li>
                  <li>• Off-topic discussions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Networking;