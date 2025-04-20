
import { useState } from 'react';
import { Idol, BoardConfig } from '@/types';
import { idols, boardConfigs } from '@/data/mockData';

const AdminConfig = () => {
  const [configs, setConfigs] = useState<BoardConfig[]>(boardConfigs);
  const [newConfig, setNewConfig] = useState<{ boardId: string; idolId: string }>({
    boardId: '',
    idolId: '',
  });

  const handleAddConfig = () => {
    if (!newConfig.boardId || !newConfig.idolId) return;
    
    setConfigs([...configs, { 
      boardId: newConfig.boardId, 
      idolId: newConfig.idolId 
    }]);
    
    setNewConfig({ boardId: '', idolId: '' });
  };

  const handleRemoveConfig = (index: number) => {
    const newConfigs = [...configs];
    newConfigs.splice(index, 1);
    setConfigs(newConfigs);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-idol-pink mb-2">Admin Configuration</h2>
      <p className="text-idol-gray mb-8">Configure your Pinterest boards and idol mappings</p>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Pinterest Board Mappings</h3>
        
        <div className="space-y-4 mb-8">
          {configs.map((config, index) => {
            const idol = idols.find(i => i.id === config.idolId);
            
            return (
              <div key={index} className="flex items-center justify-between p-3 border border-idol-pastel rounded-md">
                <div>
                  <div className="font-medium">{idol?.name} ({idol?.group})</div>
                  <div className="text-sm text-idol-gray">Board ID: {config.boardId}</div>
                </div>
                <button
                  onClick={() => handleRemoveConfig(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        
        <h3 className="text-lg font-semibold mb-4">Add New Board</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-idol-gray mb-1">
              Pinterest Board ID
            </label>
            <input
              type="text"
              value={newConfig.boardId}
              onChange={(e) => setNewConfig({ ...newConfig, boardId: e.target.value })}
              className="w-full px-4 py-2 border border-idol-lightpink rounded-md focus:outline-none focus:ring-2 focus:ring-idol-pink"
              placeholder="e.g., blackpink_jisoo"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-idol-gray mb-1">
              Idol
            </label>
            <select
              value={newConfig.idolId}
              onChange={(e) => setNewConfig({ ...newConfig, idolId: e.target.value })}
              className="w-full px-4 py-2 border border-idol-lightpink rounded-md focus:outline-none focus:ring-2 focus:ring-idol-pink"
            >
              <option value="">Select an idol</option>
              {idols.map((idol) => (
                <option key={idol.id} value={idol.id}>
                  {idol.name} ({idol.group})
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={handleAddConfig}
            disabled={!newConfig.boardId || !newConfig.idolId}
            className="px-6 py-2 bg-idol-pink text-white rounded-md hover:bg-idol-neon disabled:opacity-50 transition-colors"
          >
            Add Board Mapping
          </button>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Pinterest API Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-idol-gray mb-1">
              API Key (Read Only)
            </label>
            <input
              type="password"
              value="••••••••••••••••••••••••••••••"
              readOnly
              className="w-full px-4 py-2 border border-idol-lightpink rounded-md bg-idol-offwhite"
            />
            <p className="text-xs text-idol-gray mt-1">
              For security reasons, API keys are stored securely. Contact administrator to change.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-idol-gray mb-1">
              Daily Refresh Time
            </label>
            <select
              className="w-full px-4 py-2 border border-idol-lightpink rounded-md focus:outline-none focus:ring-2 focus:ring-idol-pink"
            >
              <option value="0">12:00 AM</option>
              <option value="6" selected>6:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="18">6:00 PM</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-idol-gray mb-1">
              Images Per Day
            </label>
            <select
              className="w-full px-4 py-2 border border-idol-lightpink rounded-md focus:outline-none focus:ring-2 focus:ring-idol-pink"
            >
              <option value="1">1 Image</option>
              <option value="2" selected>2 Images</option>
              <option value="3">3 Images</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminConfig;
