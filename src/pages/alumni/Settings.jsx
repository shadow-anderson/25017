import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Switch } from '../../components/ui/switch';
import { 
  Settings as SettingsIcon, 
  Lock, 
  Bell, 
  User, 
  Shield, 
  Save,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Settings = () => {
  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false
  });
  const [passwordErrors, setPasswordErrors] = useState({});

  // Notification settings state
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    eventReminders: true,
    jobNotifications: false,
    messageNotifications: true,
    weeklyDigest: false,
    securityAlerts: true
  });

  // General state
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  // Password form handlers
  const handlePasswordChange = (field, value) => {
    setPasswordForm(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (passwordErrors[field]) {
      setPasswordErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePasswordForm = () => {
    const errors = {};

    if (!passwordForm.oldPassword) {
      errors.oldPassword = 'Current password is required';
    }

    if (!passwordForm.newPassword) {
      errors.newPassword = 'New password is required';
    } else if (passwordForm.newPassword.length < 8) {
      errors.newPassword = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordForm.newPassword)) {
      errors.newPassword = 'Password must contain uppercase, lowercase, and number';
    }

    if (!passwordForm.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (passwordForm.oldPassword === passwordForm.newPassword) {
      errors.newPassword = 'New password must be different from current password';
    }

    return errors;
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validatePasswordForm();
    if (Object.keys(errors).length > 0) {
      setPasswordErrors(errors);
      return;
    }

    setIsSaving(true);
    setPasswordErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Password change submitted:', {
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.newPassword,
        timestamp: new Date().toISOString()
      });

      // Clear form
      setPasswordForm({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });

      setSaveStatus({ type: 'success', message: 'Password updated successfully!' });
    } catch (error) {
      setSaveStatus({ type: 'error', message: 'Failed to update password. Please try again.' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveStatus(null), 5000);
    }
  };

  // Notification handlers
  const handleNotificationChange = (key, value) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleNotificationSubmit = async () => {
    setIsSaving(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Notification settings updated:', {
        settings: notifications,
        timestamp: new Date().toISOString()
      });

      setSaveStatus({ type: 'success', message: 'Notification preferences saved!' });
    } catch (error) {
      setSaveStatus({ type: 'error', message: 'Failed to save preferences. Please try again.' });
    } finally {
      setIsSaving(false);
      setTimeout(() => setSaveStatus(null), 5000);
    }
  };

  const PasswordInput = ({ field, label, placeholder }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <Input
          type={showPasswords[field] ? "text" : "password"}
          placeholder={placeholder}
          value={passwordForm[field === 'old' ? 'oldPassword' : field === 'new' ? 'newPassword' : 'confirmPassword']}
          onChange={(e) => handlePasswordChange(
            field === 'old' ? 'oldPassword' : field === 'new' ? 'newPassword' : 'confirmPassword',
            e.target.value
          )}
          className={`pr-10 ${passwordErrors[field === 'old' ? 'oldPassword' : field === 'new' ? 'newPassword' : 'confirmPassword'] ? 'border-red-500' : ''}`}
        />
        <button
          type="button"
          onClick={() => togglePasswordVisibility(field)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
        >
          {showPasswords[field] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {passwordErrors[field === 'old' ? 'oldPassword' : field === 'new' ? 'newPassword' : 'confirmPassword'] && (
        <p className="text-sm text-red-600 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {passwordErrors[field === 'old' ? 'oldPassword' : field === 'new' ? 'newPassword' : 'confirmPassword']}
        </p>
      )}
    </div>
  );

  const NotificationItem = ({ id, label, description, checked, onChange }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-b-0">
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <div>
            <p className="text-sm font-medium text-slate-800">{label}</p>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onChange}
        className="ml-4"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your account and notification preferences</p>
        </div>

        {/* Save Status */}
        {saveStatus && (
          <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
            saveStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {saveStatus.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span className="font-medium">{saveStatus.message}</span>
          </div>
        )}

        {/* Settings Tabs */}
        <Card className="shadow-lg">
          <Tabs defaultValue="account" className="w-full">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                <SettingsIcon className="h-6 w-6 text-blue-600" />
                <CardTitle>Account Settings</CardTitle>
              </div>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Account</span>
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              {/* Account Settings Tab */}
              <TabsContent value="account" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-blue-600" />
                    Change Password
                  </h3>
                  
                  <form onSubmit={handlePasswordSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <PasswordInput
                        field="old"
                        label="Current Password"
                        placeholder="Enter your current password"
                      />
                      
                      <PasswordInput
                        field="new"
                        label="New Password"
                        placeholder="Enter your new password"
                      />
                      
                      <PasswordInput
                        field="confirm"
                        label="Confirm New Password"
                        placeholder="Confirm your new password"
                      />
                    </div>

                    {/* Password Requirements */}
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-slate-800 mb-2">Password Requirements:</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            passwordForm.newPassword.length >= 8 ? 'bg-green-500' : 'bg-slate-300'
                          }`} />
                          <span>At least 8 characters</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            /(?=.*[a-z])(?=.*[A-Z])/.test(passwordForm.newPassword) ? 'bg-green-500' : 'bg-slate-300'
                          }`} />
                          <span>Uppercase and lowercase letters</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            /(?=.*\d)/.test(passwordForm.newPassword) ? 'bg-green-500' : 'bg-slate-300'
                          }`} />
                          <span>At least one number</span>
                        </li>
                      </ul>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSaving}
                      className="w-full sm:w-auto"
                    >
                      {isSaving ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Updating Password...</span>
                        </div>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Update Password
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Security Info */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900">Security Tip</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Use a strong, unique password and consider enabling two-factor authentication for added security.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-blue-600" />
                    Notification Preferences
                  </h3>
                  
                  <div className="space-y-1">
                    <NotificationItem
                      id="emailAlerts"
                      label="Email Alerts"
                      description="Receive important updates and announcements via email"
                      checked={notifications.emailAlerts}
                      onChange={(checked) => handleNotificationChange('emailAlerts', checked)}
                    />
                    
                    <NotificationItem
                      id="eventReminders"
                      label="Event Reminders"
                      description="Get notified about upcoming alumni events and deadlines"
                      checked={notifications.eventReminders}
                      onChange={(checked) => handleNotificationChange('eventReminders', checked)}
                    />
                    
                    <NotificationItem
                      id="jobNotifications"
                      label="Job Notifications"
                      description="Receive alerts about new job postings that match your interests"
                      checked={notifications.jobNotifications}
                      onChange={(checked) => handleNotificationChange('jobNotifications', checked)}
                    />
                    
                    <NotificationItem
                      id="messageNotifications"
                      label="Message Notifications"
                      description="Get notified when you receive messages from other alumni"
                      checked={notifications.messageNotifications}
                      onChange={(checked) => handleNotificationChange('messageNotifications', checked)}
                    />
                    
                    <NotificationItem
                      id="weeklyDigest"
                      label="Weekly Digest"
                      description="Receive a weekly summary of alumni network activity"
                      checked={notifications.weeklyDigest}
                      onChange={(checked) => handleNotificationChange('weeklyDigest', checked)}
                    />
                    
                    <NotificationItem
                      id="securityAlerts"
                      label="Security Alerts"
                      description="Important security notifications (recommended to keep enabled)"
                      checked={notifications.securityAlerts}
                      onChange={(checked) => handleNotificationChange('securityAlerts', checked)}
                    />
                  </div>

                  <Button 
                    onClick={handleNotificationSubmit}
                    disabled={isSaving}
                    className="w-full sm:w-auto mt-6"
                  >
                    {isSaving ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save Preferences
                      </>
                    )}
                  </Button>
                </div>

                {/* Notification Info */}
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Bell className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-amber-900">Notification Settings</h4>
                      <p className="text-sm text-amber-700 mt-1">
                        You can change these preferences at any time. Security alerts are highly recommended for account safety.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Additional Info */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Need Help?</CardTitle>
            <CardDescription>
              If you're having trouble with your account settings or need assistance, please contact our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1">
                Contact Support
              </Button>
              <Button variant="outline" className="flex-1">
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;