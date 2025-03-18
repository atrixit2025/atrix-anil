import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import Button from "../../components/ui/button/Button";
import Checkbox from "../../components/form/input/Checkbox";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import ComponentCategory from "../../components/common/ComponentCategoryCard";
import { ImageProvider } from "../../ContextApi/ImageApi";
import axios from "axios";

export default function NewAddTechnology() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [imageId, setImageId] = useState(null);

  // Get the technology object from the state
  const { technology } = location.state || {};

  // Pre-fill the form if in edit mode
  useEffect(() => {
    if (technology) {
      setTitle(technology.name); 
      setSelectedCategories(technology.Category.split(", ")); 
      setImageId(technology.team.images[0]); 
    }
  }, [technology]);


  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        // If the category is already selected, remove it
        return prev.filter((cat) => cat !== category);
      } else {
        // If the category is not selected, add it
        return [...prev, category];
      }
    });
  };
  useEffect(() => {
    if (technology) {
      setTitle(technology.name);
      setSelectedCategories(technology.Category.split(", "));
      setImageId(technology.imageId); // Use imageId instead of imageUrl
    }
  }, [technology]);

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Title:", title);
    console.log("Selected Categories:", selectedCategories);
    console.log("Image ID:", imageId);
  
    if (!title || selectedCategories.length === 0 || !imageId) {
      alert("Title, category, and image are required!");
      return;
    }
  
    const technologyData = {
      title,
      category: selectedCategories.join(", "),
      imageId, // Ensure this is correctly formatted
    };
  
    try {
      if (technology) {
        // Log the payload for debugging
        console.log("Update Payload:", {
          id: technology.id,
          ...technologyData,
        });
  
        // Update existing technology
        const response = await axios.put(`http://localhost:5300/technology/edit`, {
          id: technology.id, // Include the ID in the request body
          ...technologyData,
        });
  
        console.log("Update Response:", response.data);
        alert("Technology updated successfully!");
      } else {
        // Log the payload for debugging
        console.log("Create Payload:", technologyData);
  
        // Create new technology
        const response = await axios.post("http://localhost:5300/technology/add", technologyData);
        
        console.log("Create Response:", response.data);
        alert("Technology created successfully!");
      }
  
      navigate("/Technology"); // Navigate back to the Technology list
    } catch (error) {
      console.error("Error saving technology:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data); // Log the server's error response
      }
      alert("Error saving technology. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white/90">
          {technology ? "Edit Technology" : "Add New Technology"}
        </h1>
        <div>
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer"
            onClick={handleSubmit}
          >
            {technology ? "Update" : "Publish"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[4fr_1fr] gap-6">
        <div>
          <Label htmlFor="input">Add Title</Label>
          <Input
            type="text"
            id="input"
            placeholder="Add Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
        </div>
        <div className="space-y-6">
          <div>
            <ComponentCategory title="Category">
              <div className="items-center gap-4 space-y-5">
                {/* Frontend Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedCategories.includes("Frontend")} // Check if "Frontend" is selected
                    onChange={() => handleCategoryChange("Frontend")} // Call handleCategoryChange when the checkbox state changes
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Frontend
                  </span>
                </div>

                {/* Backend Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedCategories.includes("Backend")} // Check if "Backend" is selected
                    onChange={() => handleCategoryChange("Backend")} // Call handleCategoryChange when the checkbox state changes
                  />
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Backend
                  </span>
                </div>
              </div>
            </ComponentCategory>
          </div>
          <ImageProvider>
            <FileInputExample  onImageUpload={(imageId) => setImageId(imageId)} // Callback to update the imageId in the parent component
  imageId={technology?.imageId} />
          </ImageProvider>
        </div>
      </div>
    </div>
  );
}