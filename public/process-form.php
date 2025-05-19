
<?php
// Set headers to handle CORS and JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// If it's a preflight OPTIONS request, return with 200 OK
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $json = file_get_contents('php://input');
    
    // Decode the JSON data
    $data = json_decode($json, true);
    
    // Validate the data
    if (!$data || empty($data['name']) || empty($data['email']) || empty($data['phone']) || empty($data['dealershipName'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit();
    }
    
    // Prepare email content
    $to = "info@nexacoreagency.com";
    $subject = "New Lead Form Submission from " . $data['dealershipName'];
    
    $message = "Name: " . htmlspecialchars($data['name']) . "\n";
    $message .= "Email: " . htmlspecialchars($data['email']) . "\n";
    $message .= "Phone: " . htmlspecialchars($data['phone']) . "\n";
    $message .= "Dealership Name: " . htmlspecialchars($data['dealershipName']) . "\n";
    $message .= "Existing Customer: " . htmlspecialchars($data['isExistingCustomer']) . "\n";
    $message .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
    
    $headers = "From: " . htmlspecialchars($data['email']) . "\r\n";
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
